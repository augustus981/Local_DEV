import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { DIALOG } from '../../constants/dialog';
import { BUTTON_LABELS } from '../../constants/display';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  // Constants
  readonly BUTTON_LABELS = BUTTON_LABELS;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmComponent>
  ) { }

  ngOnInit() {
  }

  /** Confirm */
  confirm() {
    this.dialogRef.close({ event: DIALOG.EVENT_YES });
  }

  /** Close dialog */
  close() {
    this.dialogRef.close({ event: DIALOG.EVENT_NO });
  }
}
