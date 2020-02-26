import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

import { CustomSnackbarComponent } from '../components/custom-snackbar/custom-snackbar.component';
import {
    ASSOCIATE_MSSG, ERROR_MSSG, INDUCTION_TASK_MSSG, PROBATION_TASK_MSSG
} from '../constants/message';
import { SNACKBAR } from '../constants/snackbar';
import { STATUS } from '../constants/status';

@Injectable({
    providedIn: 'root'
})
export class SnackBarUtil {

    // Snackbar duration
    duration = 4000;

    constructor(
        private snackBar: MatSnackBar,
        private translateService: TranslateService
    ) { }

    /** Show snackbar according to each case */
    showSnackBar(type: string, data?: any) {
        switch (type) {
            case SNACKBAR.IMPORT:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.OK,
                        message: this.translateService.instant(ASSOCIATE_MSSG.ASSOCIATE_IMPORT)
                    }
                });
                break;

            case SNACKBAR.ADD_ASSOCIATE:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.OK,
                        message: this.translateService.instant(ASSOCIATE_MSSG.ASSOCIATE_CREATE)
                    }
                });
                break;

            case SNACKBAR.EDIT_ASSOCIATE:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.OK,
                        message: this.translateService.instant(ASSOCIATE_MSSG.ASSOCIATE_UPDATE)
                    }
                });
                break;

            case SNACKBAR.DELETE_ASSOCIATE:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.OK,
                        message: this.translateService.instant(ASSOCIATE_MSSG.ASSOCIATE_DELETE)
                    }
                });
                break;

            case SNACKBAR.DELETE_ASSOCIATES:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.OK,
                        message: this.translateService.instant(ASSOCIATE_MSSG.ASSOCIATE_DELETE_MULTIPLE)
                    }
                });
                break;

            case SNACKBAR.ENABLE_ACCOUNT:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.OK,
                        message: this.translateService.instant(ASSOCIATE_MSSG.ACCOUNT_ENABLE, { value: data.name })
                    }
                });
                break;

            case SNACKBAR.DISABLE_ACCOUNT:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.OK,
                        message: this.translateService.instant(ASSOCIATE_MSSG.ACCOUNT_DISABLE, { value: data.name })
                    }
                });
                break;

            case SNACKBAR.ADD_INDUCTION_TASK:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.OK,
                        message: this.translateService.instant(INDUCTION_TASK_MSSG.INDUCTION_TASK_CREATE)
                    }
                });
                break;

            case SNACKBAR.EDIT_INDUCTION_TASK:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.OK,
                        message: this.translateService.instant(INDUCTION_TASK_MSSG.INDUCTION_TASK_UPDATE)
                    }
                });
                break;

            case SNACKBAR.DELETE_INDUCTION_TASK:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.OK,
                        message: this.translateService.instant(INDUCTION_TASK_MSSG.INDUCTION_TASK_DELETE)
                    }
                });
                break;

            case SNACKBAR.ADD_PROBATION_TASK:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.OK,
                        message: this.translateService.instant(INDUCTION_TASK_MSSG.INDUCTION_TASK_CREATE)
                    }
                });
                break;

            case SNACKBAR.EDIT_PROBATION_TASK:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.OK,
                        message: this.translateService.instant(INDUCTION_TASK_MSSG.INDUCTION_TASK_UPDATE)
                    }
                });
                break;

            case SNACKBAR.DELETE_PROBATION_TASK:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.OK,
                        message: this.translateService.instant(INDUCTION_TASK_MSSG.INDUCTION_TASK_DELETE)
                    }
                });
                break;

            case SNACKBAR.FILE_LIMIT:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'error-snackbar',
                    data: {
                        state: STATUS.ERROR,
                        message: this.translateService.instant(ERROR_MSSG.FILE_LIMIT)
                    }
                });
                break;

            case SNACKBAR.FILE_SIZE:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'error-snackbar',
                    data: {
                        state: STATUS.ERROR,
                        message: this.translateService.instant(ERROR_MSSG.FILE_SIZE)
                    }
                });
                break;

            case SNACKBAR.FILE_EXTENSION:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'error-snackbar',
                    data: {
                        state: STATUS.ERROR,
                        message: this.translateService.instant(ERROR_MSSG.FILE_EXTENSION)
                    }
                });
                break;

            case SNACKBAR.SEND_INDUCTION_NOTIFICATION:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.ERROR,
                        message: this.translateService.instant(INDUCTION_TASK_MSSG.INDUCTION_NOTIFICATION_SEND)
                    }
                });
                break;

            case SNACKBAR.PROBATION_APPROVAL:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'success-snackbar',
                    data: {
                        state: STATUS.ERROR,
                        message: this.translateService.instant(PROBATION_TASK_MSSG.PROBATION_APPROVAL)
                    }
                });
                break;

            case SNACKBAR.API_FAIL:
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    duration: this.duration,
                    panelClass: 'error-snackbar',
                    data: {
                        state: STATUS.ERROR,
                        message: this.translateService.instant(ERROR_MSSG.API_FAIL)
                    }
                });
                break;
        }
    }
}
