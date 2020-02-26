import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';

import { STATUS } from '../../constants/status';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.scss']
})
export class CustomSnackbarComponent implements OnInit {

  icon: string;
  message: string;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) private config: any,
    private snackbarRef: MatSnackBarRef<any>
  ) { }

  ngOnInit() {
    this.message = this.config.message;
    switch (this.config.state) {
      case STATUS.OK:
        this.icon = 'check_circle';
        break;
      case STATUS.ERROR:
        this.icon = 'warning';
        break;
    }
  }

  /** Close snackbar */
  close() {
    this.snackbarRef.dismiss();
  }
}
