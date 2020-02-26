/** Error messages */
export enum ERROR_MSSG {
    REQUIRED = 'message.error.required',
    EMAIL_VALIDITY = 'message.error.email-validity',
    DATE_VALIDITY = 'message.error.date-validity',
    FILE_LIMIT = 'message.error.file-limit',
    FILE_SIZE = 'message.error.file-size',
    FILE_EXTENSION = 'message.error.file-extension',
    NUMBER_FORMAT = 'message.error.number-format',
    API_FAIL = 'snackbar.api-fail'
}

/** Associate operation messages */
export enum ASSOCIATE_MSSG {
    ASSOCIATE_IMPORT = 'snackbar.associate.import',
    ASSOCIATE_CREATE = 'snackbar.associate.create',
    ASSOCIATE_UPDATE = 'snackbar.associate.update',
    ASSOCIATE_DELETE = 'snackbar.associate.delete',
    ASSOCIATE_DELETE_MULTIPLE = 'snackbar.associate.multi-delete',
    ACCOUNT_ENABLE = 'snackbar.associate.account-enable',
    ACCOUNT_DISABLE = 'snackbar.associate.account-disable'
}

/** Induction task operation messages */
export enum INDUCTION_TASK_MSSG {
    INDUCTION_TASK_IMPORT = 'snackbar.induction-task.import',
    INDUCTION_TASK_CREATE = 'snackbar.induction-task.create',
    INDUCTION_TASK_UPDATE = 'snackbar.induction-task.update',
    INDUCTION_TASK_DELETE = 'snackbar.induction-task.delete',
    INDUCTION_NOTIFICATION_SEND = 'snackbar.induction-task.notification-send'
}

/** Probation task operation messages */
export enum PROBATION_TASK_MSSG {
    PROBATION_TASK_IMPORT = 'snackbar.probation-task.import',
    PROBATION_TASK_CREATE = 'snackbar.probation-task.create',
    PROBATION_TASK_UPDATE = 'snackbar.probation-task.update',
    PROBATION_TASK_DELETE = 'snackbar.probation-task.delete',
    PROBATION_APPROVAL = 'snackbar.probation-task.probation-approval'
}

/** Confirm messages */
export enum CONFIRM_MSSG {
    DELETE_TITLE = 'dialog.confirm.deletion.title',
    DELETE_CONFIRM = 'dialog.confirm.deletion.content',
    TOGGLE_ACCOUNT_TITLE = 'dialog.confirm.toggle_account.title',
    TOGGLE_ACCOUNT_CONFIRM = 'dialog.confirm.toggle_account.content',
    APPROVE_PROBATION_TITLE = 'dialog.confirm.approve_probation.title',
    APPROVE_PROBATION_CONFIRM = 'dialog.confirm.approve_probation.content'
}
