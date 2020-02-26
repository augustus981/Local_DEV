import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { DIALOG } from 'src/app/shared/constants/dialog';
import { BUTTON_LABELS } from 'src/app/shared/constants/display';
import { InductionPendingTask } from 'src/app/shared/models/induction/induction-pending-task';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import {
  InductionPendingApiService
} from 'src/app/shared/services/induction/induction-pending/induction-pending-api.service';

import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import {
  InductionNotificationSenderComponent
} from '../induction-notification-sender/induction-notification-sender.component';

@Component({
  selector: 'app-induction-pending-viewer',
  templateUrl: './induction-pending-viewer.component.html',
  styleUrls: ['./induction-pending-viewer.component.scss']
})
export class InductionPendingViewerComponent implements OnInit, AfterViewInit {

  // Constants
  readonly DIALOG = DIALOG;
  readonly BUTTON_LABELS = BUTTON_LABELS;

  // Disable animation
  disableAnimation = true;

  // Pending tasks
  pendingTasks: InductionPendingTask[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmComponent>,
    private dialogService: DialogService,
    private inductionPendingApiService: InductionPendingApiService
  ) { }

  ngOnInit() {
    this.getPendingTasks(this.data.id);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.disableAnimation = false;
    });
  }

  /** Get pending tasks */
  getPendingTasks(id: number) {
    this.inductionPendingApiService.getTasks(id).subscribe((result: InductionPendingTask[]) => {
      this.pendingTasks = result;
    });
  }

  /** Open notification sender */
  openNotificationSender(pendingTask: InductionPendingTask) {
    this.dialogService.openDialog(InductionNotificationSenderComponent, {
      task: pendingTask
    });
  }

  /** Close dialog */
  close() {
    this.dialogRef.close();
  }
}
