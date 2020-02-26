import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog,
  ) { }

  /** Open dialog */
  openDialog(component: any, dataObject?: any): MatDialogRef<any, any> {
    return this.dialog.open(component, {
      width: 'fit-content',
      panelClass: 'dialog-container',
      disableClose: true,
      autoFocus: false,
      data: dataObject
    });
  }
}
