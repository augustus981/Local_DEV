import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { INDUCTION_TASK_FIELD_KEYS, INDUCTION_TASK_FIELDS } from 'src/app/shared/constants/content';
import { DIALOG } from 'src/app/shared/constants/dialog';
import { BUTTON_LABELS } from 'src/app/shared/constants/display';
import { VALIDATOR_TYPES } from 'src/app/shared/constants/form';
import { CONFIRM_MSSG, ERROR_MSSG } from 'src/app/shared/constants/message';
import { SNACKBAR } from 'src/app/shared/constants/snackbar';
import { UNITS } from 'src/app/shared/constants/unit';
import { NewcomerTask } from 'src/app/shared/models/associate/newcomer-task';
import { CommService } from 'src/app/shared/services/comm/comm.service';
import {
  InductionTaskApiService
} from 'src/app/shared/services/induction/induction-task/induction-task-api.service';
import { SnackBarUtil } from 'src/app/shared/utils/snackbar-util';

import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-induction-task-modifier',
  templateUrl: './induction-task-modifier.component.html',
  styleUrls: ['./induction-task-modifier.component.scss']
})
export class InductionTaskModifierComponent implements OnInit, AfterViewInit {

  // Constants
  readonly DIALOG = DIALOG;
  readonly INDUCTION_TASK_FIELDS = INDUCTION_TASK_FIELDS;
  readonly INDUCTION_TASK_FIELD_KEYS = INDUCTION_TASK_FIELD_KEYS;
  readonly UNITS = UNITS;
  readonly BUTTON_LABELS = BUTTON_LABELS;

  // Object
  inductionTask: NewcomerTask;

  // Form controls
  formGroup = new FormGroup({
    taskControl: new FormControl('', [Validators.required]),
    durationControl: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    remarkControl: new FormControl('', [Validators.required]),
    descriptionControl: new FormControl('', [Validators.required])
  });

  // Duration unit
  durationUnit = UNITS.DURATION_DAYS;

  // Attached files
  files = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public commService: CommService,
    public dialogRef: MatDialogRef<InductionTaskModifierComponent>,
    public inductionTaskApiService: InductionTaskApiService,
    private cd: ChangeDetectorRef,
    private dialog: MatDialog,
    private snackBarUtil: SnackBarUtil,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.commService.getData().subscribe(() => {
      this.inductionTask = Object.keys(this.data).length > 0 ? this.data : null;

      if (this.inductionTask) {
        // Convert duration to week if the amount of days is divisible by 7
        let convertedDuration = this.inductionTask.duration;
        if ((convertedDuration % 7) === 0 && convertedDuration > 7) {
          convertedDuration /= 7;
          this.durationUnit = UNITS.DURATION_WEEKS;
        }

        this.formGroup.patchValue({
          taskControl: this.inductionTask.task,
          durationControl: convertedDuration,
          remarkControl: this.inductionTask.remark,
          descriptionControl: this.inductionTask.description
        });
      }
    });

    // Force change detection after changing field values
    this.cd.detectChanges();
  }

  /** Get dropped files */
  getDroppedFiles($event) {
    // this.files.splice(0, this.files.length);
    // for (const file of $event) {
    //   this.files.push({
    //     name: file.name,
    //     size: file.size,
    //     link: 'server:8080'
    //   });
    // }
  }

  /** Get dropped files */
  getInputFiles($event) {
    // this.files.splice(0, this.files.length);
    // for (const file of $event.target.files) {
    //   this.files.push({
    //     name: file.name,
    //     size: file.size,
    //     link: 'server:8080'
    //   });
    // }
  }

  /** Check if name input is valid */
  inputsAreValid(): boolean {
    if (this.formGroup.valid) {
      return true;
    }

    return false;
  }

  /** Save input info */
  save() {
    let convertedDuration: number;
    if (this.durationUnit === UNITS.DURATION_DAYS) {
      convertedDuration = Number(this.formGroup.controls.durationControl.value);
    } else if (this.durationUnit === UNITS.DURATION_WEEKS) {
      convertedDuration = Number(this.formGroup.controls.durationControl.value) * 7;
    }

    if (this.inputsAreValid()) {
      const inductionTask = new NewcomerTask(
        this.formGroup.controls.taskControl.value,
        this.formGroup.controls.descriptionControl.value,
        convertedDuration,
        this.formGroup.controls.remarkControl.value,
        this.files
      );
      inductionTask.checklistType = 'Induction';

      if (this.inductionTask) {
        // Since this is editting, ID must be assigned
        inductionTask.id = this.data.id;

        this.inductionTaskApiService.editInductionTask(
          inductionTask
        ).subscribe(() => {
          this.commService.sendData();
          this.snackBarUtil.showSnackBar(SNACKBAR.EDIT_INDUCTION_TASK);
        });
      } else {
        this.inductionTaskApiService.addInductionTask(
          inductionTask
        ).subscribe(() => {
          this.commService.sendData();
          this.snackBarUtil.showSnackBar(SNACKBAR.ADD_INDUCTION_TASK);
        });
      }

      this.close();
    }
  }

  /** Delete */
  delete() {
    let dialogRef: MatDialogRef<any, any>;

    dialogRef = this.dialog.open(ConfirmComponent, {
      width: 'fit-content',
      panelClass: 'dialog-container',
      disableClose: true,
      autoFocus: false,
      data: {
        title: CONFIRM_MSSG.DELETE_TITLE,
        message: CONFIRM_MSSG.DELETE_CONFIRM
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === DIALOG.EVENT_YES) {
        this.inductionTaskApiService.deleteInductionTask(
          this.data
        ).subscribe(() => {
          this.commService.sendData();
          this.snackBarUtil.showSnackBar(SNACKBAR.DELETE_INDUCTION_TASK);
        });

        this.close();
      }
    });
  }

  /** Close dialog */
  close() {
    this.dialogRef.close();
  }

  /** Get error message if form inputs are invalid */
  getErrorMessage(type: string) {
    switch (type) {
      case INDUCTION_TASK_FIELD_KEYS.TASK:
        return this.formGroup.controls.taskControl.hasError(VALIDATOR_TYPES.REQUIRED) ?
          this.translateService.instant(ERROR_MSSG.REQUIRED) : '';

      case INDUCTION_TASK_FIELD_KEYS.DURATION:
        return this.formGroup.controls.durationControl.hasError(VALIDATOR_TYPES.REQUIRED) ?
          this.translateService.instant(ERROR_MSSG.REQUIRED) :
          (this.formGroup.controls.durationControl.hasError(VALIDATOR_TYPES.NUMBER) ?
            this.translateService.instant(ERROR_MSSG.NUMBER_FORMAT) : '');

      case INDUCTION_TASK_FIELD_KEYS.DESCRIPTION:
        return this.formGroup.controls.descriptionControl.hasError(VALIDATOR_TYPES.REQUIRED) ?
          this.translateService.instant(ERROR_MSSG.REQUIRED) : '';

      case INDUCTION_TASK_FIELD_KEYS.REMARK:
        return this.formGroup.controls.remarkControl.hasError(VALIDATOR_TYPES.REQUIRED) ?
          this.translateService.instant(ERROR_MSSG.REQUIRED) : '';
    }
  }

  /** Download file */
  downloadFile(file: any) {

  }

  /** Delete file */
  deleteFile(file: any) {

  }
}
