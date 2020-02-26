import * as moment from 'moment';
import { ASSOCIATE_FIELD_KEYS, ASSOCIATE_FIELDS } from 'src/app/shared/constants/content';
import { DIALOG } from 'src/app/shared/constants/dialog';
import { BUTTON_LABELS } from 'src/app/shared/constants/display';
import { VALIDATOR_TYPES } from 'src/app/shared/constants/form';
import { DATE_FORMATS } from 'src/app/shared/constants/format';
import { ERROR_MSSG } from 'src/app/shared/constants/message';
import { SNACKBAR } from 'src/app/shared/constants/snackbar';
import { Associate } from 'src/app/shared/models/associate/associate';
import { AssociateApiService } from 'src/app/shared/services/associate/associate-api.service';
import { CommService } from 'src/app/shared/services/comm/comm.service';
import { ConversionService } from 'src/app/shared/services/general/conversion.service';
import { SnackBarUtil } from 'src/app/shared/utils/snackbar-util';

import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {
  DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MAT_DIALOG_DATA, MatDialogRef
} from '@angular/material/';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-associate-modifier',
  templateUrl: './associate-modifier.component.html',
  styleUrls: ['./associate-modifier.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: DATE_FORMATS
    }
  ]
})
export class AssociateModifierComponent implements OnInit, AfterViewInit {

  // Constants
  readonly DIALOG = DIALOG;
  readonly ASSOCIATE_FIELDS = ASSOCIATE_FIELDS;
  readonly ASSOCIATE_FIELD_KEYS = ASSOCIATE_FIELD_KEYS;
  readonly BUTTON_LABELS = BUTTON_LABELS;

  // Object
  associate: Associate;

  // Form controls
  formGroup = new FormGroup({
    nameControl: new FormControl('', [Validators.required]),
    genderControl: new FormControl('', [Validators.required]),
    emailControl: new FormControl('', [Validators.required, Validators.email]),
    phoneControl: new FormControl('', [Validators.required]),
    remarkControl: new FormControl('', []),
    groupControl: new FormControl('', [Validators.required]),
    prefixControl: new FormControl('', []),
    joiningDateControl: new FormControl('', [Validators.required]),
    competenceControl: new FormControl('', [Validators.required])
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public associateApiService: AssociateApiService,
    public dialogRef: MatDialogRef<AssociateModifierComponent>,
    private cd: ChangeDetectorRef,
    private commService: CommService,
    private conversionService: ConversionService,
    private snackBarUtil: SnackBarUtil,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Only 1 associate data is needed, need not to use "for" loop
    this.commService.getData().subscribe(() => {
      this.associate = Object.keys(this.data).length > 0 ? this.data : null;

      if (this.associate) {
        this.formGroup.patchValue({
          nameControl: this.associate.name,
          genderControl: this.associate.gender,
          emailControl: this.associate.email,
          phoneControl: this.associate.phone,
          remarkControl: this.associate.remark,
          groupControl: this.associate.userGroup,
          prefixControl: this.associate.prefix,
          joiningDateControl: moment(
            this.conversionService.convertFromMillisecondsToDate(this.associate.joinDate),
            DATE_FORMATS.display.dateInput
          ).toDate(),
          competenceControl: this.associate.competence
        });
      }
    }).unsubscribe();

    // Force change detection after changing field values
    this.cd.detectChanges();
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
    if (this.inputsAreValid()) {
      const associate = new Associate(
        this.formGroup.controls.groupControl.value,
        this.formGroup.controls.prefixControl.value,
        this.formGroup.controls.nameControl.value,
        this.formGroup.controls.genderControl.value,
        this.formGroup.controls.competenceControl.value,
        this.formGroup.controls.emailControl.value,
        this.formGroup.controls.phoneControl.value,
        this.formGroup.controls.remarkControl.value,
        this.conversionService.convertFromDateToMilliseconds(
          this.formGroup.controls.joiningDateControl.value
        )
      );

      if (this.associate) {
        // Since this is editting, ID must be assigned
        associate.id = this.data.id;

        this.associateApiService.editAssociate(
          associate
        ).subscribe(() => {
          this.commService.sendData();
          this.snackBarUtil.showSnackBar(SNACKBAR.EDIT_ASSOCIATE);
        });
      } else {
        this.associateApiService.addAssociate(
          associate
        ).subscribe(() => {
          this.commService.sendData();
          this.snackBarUtil.showSnackBar(SNACKBAR.ADD_ASSOCIATE);
        });
      }

      this.close();
    }
  }

  /** Close dialog */
  close() {
    this.dialogRef.close();
  }

  /** Get error message if form inputs are invalid */
  getErrorMessage(type: string) {
    switch (type) {
      case ASSOCIATE_FIELD_KEYS.NAME:
        return this.formGroup.controls.nameControl.hasError(VALIDATOR_TYPES.REQUIRED) ?
          this.translateService.instant(ERROR_MSSG.REQUIRED) : '';

      case ASSOCIATE_FIELD_KEYS.EMAIL:
        return this.formGroup.controls.emailControl.hasError(VALIDATOR_TYPES.REQUIRED) ?
          this.translateService.instant(ERROR_MSSG.REQUIRED) :
          (this.formGroup.controls.emailControl.hasError(VALIDATOR_TYPES.EMAIL) ?
            this.translateService.instant(ERROR_MSSG.EMAIL_VALIDITY) : '');

      case ASSOCIATE_FIELD_KEYS.PHONE:
        return this.formGroup.controls.phoneControl.hasError(VALIDATOR_TYPES.REQUIRED) ?
          this.translateService.instant(ERROR_MSSG.REQUIRED) : '';

      case ASSOCIATE_FIELD_KEYS.GROUP:
        return this.formGroup.controls.groupControl.hasError(VALIDATOR_TYPES.REQUIRED) ?
          this.translateService.instant(ERROR_MSSG.REQUIRED) : '';

      case ASSOCIATE_FIELD_KEYS.JOINING_DATE:
        return this.formGroup.controls.joiningDateControl.hasError(VALIDATOR_TYPES.REQUIRED) ?
          this.translateService.instant(ERROR_MSSG.REQUIRED) : '';

      case ASSOCIATE_FIELD_KEYS.COMPETENCE:
        return this.formGroup.controls.competenceControl.hasError(VALIDATOR_TYPES.REQUIRED) ?
          this.translateService.instant(ERROR_MSSG.REQUIRED) : '';
    }
  }
}
