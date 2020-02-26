import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { DIALOG } from 'src/app/shared/constants/dialog';
import { BUTTON_LABELS } from 'src/app/shared/constants/display';
import { CONFIRM_MSSG } from 'src/app/shared/constants/message';
import { SNACKBAR } from 'src/app/shared/constants/snackbar';
import { Associate } from 'src/app/shared/models/associate/associate';
import { NewcomerTask } from 'src/app/shared/models/associate/newcomer-task';
import { ProbationPendingTask } from 'src/app/shared/models/probation/probation-pending-task';
import { AssociateApiService } from 'src/app/shared/services/associate/associate-api.service';
import { CommService } from 'src/app/shared/services/comm/comm.service';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import {
  ProbationPendingApiService
} from 'src/app/shared/services/probation/probation-pending/probation-pending-api.service';
import { SnackBarUtil } from 'src/app/shared/utils/snackbar-util';

import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-probation-pending-viewer',
  templateUrl: './probation-pending-viewer.component.html',
  styleUrls: ['./probation-pending-viewer.component.scss']
})
export class ProbationPendingViewerComponent implements OnInit, AfterViewInit {

  // Constants
  readonly DIALOG = DIALOG;
  readonly BUTTON_LABELS = BUTTON_LABELS;

  // Disable animation
  disableAnimation = true;

  // Pending tasks
  pendingTasks: ProbationPendingTask[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Associate,
    public dialogRef: MatDialogRef<ConfirmComponent>,
    private associateApiService: AssociateApiService,
    private commService: CommService,
    private dialogService: DialogService,
    private probationPendingApiService: ProbationPendingApiService,
    private snackBarUtil: SnackBarUtil
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
    this.probationPendingApiService.getTasks(id).subscribe((result: ProbationPendingTask[]) => {
      this.pendingTasks = result;
    });
  }

  /** Open notification sender */
  // openNotificationSender(pendingTask: ProbationPendingTask) {
  //   this.dialogService.openDialog(ProbationNotificationSenderComponent, {
  //     task: pendingTask
  //   });
  // }

  /** Approve */
  approve() {
    const dialogRef = this.dialogService.openDialog(ConfirmComponent,
      {
        title: CONFIRM_MSSG.APPROVE_PROBATION_TITLE,
        message: CONFIRM_MSSG.APPROVE_PROBATION_CONFIRM
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'yes') {
        this.data.approved = !this.data.approved;
        this.associateApiService.editAssociate(this.data).subscribe(() => {
          this.commService.sendData();
          this.snackBarUtil.showSnackBar(SNACKBAR.PROBATION_APPROVAL);
          this.close();
        });
      }
    });
  }

  /** Close dialog */
  close() {
    this.dialogRef.close();
  }
}
