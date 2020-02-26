import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import {
  INDUCTION_NOTIFICATION_FIELD_KEYS, INDUCTION_NOTIFICATION_FIELDS
} from 'src/app/shared/constants/content';
import { DIALOG } from 'src/app/shared/constants/dialog';
import { BUTTON_LABELS } from 'src/app/shared/constants/display';
import { VALIDATOR_TYPES } from 'src/app/shared/constants/form';
import { ERROR_MSSG } from 'src/app/shared/constants/message';
import { SNACKBAR } from 'src/app/shared/constants/snackbar';
import {
  NotificationApiService
} from 'src/app/shared/services/notification/notification-api.service';
import { SnackBarUtil } from 'src/app/shared/utils/snackbar-util';

import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

import { InductionMessage } from '../../../../../shared/models/induction/induction-message';

@Component({
  selector: 'app-induction-notification-sender',
  templateUrl: './induction-notification-sender.component.html',
  styleUrls: ['./induction-notification-sender.component.scss']
})
export class InductionNotificationSenderComponent implements OnInit {

  // Constants
  readonly DIALOG = DIALOG;
  readonly BUTTON_LABELS = BUTTON_LABELS;
  readonly INDUCTION_NOTIFICATION_FIELD_KEYS = INDUCTION_NOTIFICATION_FIELD_KEYS;

  // Form controls
  formGroup = new FormGroup({
    messageControl: new FormControl('', [Validators.required])
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmComponent>,
    private notificationApiService: NotificationApiService,
    private snackBarUtil: SnackBarUtil,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
  }

  /** Check if name input is valid */
  inputsAreValid(): boolean {
    if (this.formGroup.valid) {
      return true;
    }

    return false;
  }

  /** Send notification */
  send() {
    if (this.inputsAreValid()) {
      const inductionMessage = new InductionMessage(
        this.data.task.newcomer.id,
        this.data.task.assigment.id,
        this.formGroup.controls.messageControl.value
      );

      this.notificationApiService.sendInductionNotification(inductionMessage).subscribe(() => {
        this.snackBarUtil.showSnackBar(SNACKBAR.SEND_INDUCTION_NOTIFICATION);
        this.close();
      });
    }
  }

  /** Close dialog */
  close() {
    this.dialogRef.close();
  }

  /** Get error message if form inputs are invalid */
  getErrorMessage(type: string) {
    switch (type) {
      case INDUCTION_NOTIFICATION_FIELDS.MESSAGE:
        return this.formGroup.controls.nameControl.hasError(VALIDATOR_TYPES.REQUIRED) ?
          this.translateService.instant(ERROR_MSSG.REQUIRED) : '';
    }
  }
}
