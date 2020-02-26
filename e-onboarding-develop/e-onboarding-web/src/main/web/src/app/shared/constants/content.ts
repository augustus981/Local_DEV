/** Onboarding table columns */
export enum ONBOARDING_COLS {
    NO = 'onboarding.onboarding-table.no',
    GROUP = 'onboarding.onboarding-table.group',
    PREFIX = 'onboarding.onboarding-table.prefix',
    NAME = 'onboarding.onboarding-table.name',
    COMPETENCE = 'onboarding.onboarding-table.competence',
    EMAIL = 'onboarding.onboarding-table.email',
    PHONE = 'onboarding.onboarding-table.phone',
    REMARK = 'onboarding.onboarding-table.remark',
    JOINING_DATE = 'onboarding.onboarding-table.joining-date',
    ACTION = 'onboarding.onboarding-table.action'
}

/** Onboarding table column keys */
export enum ONBOARDING_COL_KEYS {
    NO = 'no',
    GROUP = 'group',
    PREFIX = 'prefix',
    NAME = 'name',
    COMPETENCE = 'competence',
    EMAIL = 'email',
    PHONE = 'phone',
    REMARK = 'remark',
    JOINING_DATE = 'joiningDate',
    ACTION = 'action',
    SELECT = 'select'
}

/** Induction pending table columns */
export enum INDUCTION_PENDING_COLS {
    NO = 'onboarding.induction.no',
    GROUP = 'onboarding.induction.group',
    PREFIX = 'onboarding.induction.prefix',
    NAME = 'onboarding.induction.name',
    COMPETENCE = 'onboarding.induction.competence',
    EMAIL = 'onboarding.induction.email',
    PHONE = 'onboarding.induction.phone',
    REMARK = 'onboarding.induction.remark',
    JOINING_DATE = 'onboarding.induction.joining-date',
    ACTION = 'onboarding.induction.action'
}

/** Induction pending table column keys */
export enum INDUCTION_PENDING_COL_KEYS {
    NO = 'no',
    GROUP = 'group',
    PREFIX = 'prefix',
    NAME = 'name',
    COMPETENCE = 'competence',
    EMAIL = 'email',
    PHONE = 'phone',
    REMARK = 'remark',
    JOINING_DATE = 'joiningDate',
    ACTION = 'action'
}

/** Probation pending table columns */
export enum PROBATION_PENDING_COLS {
    NO = 'onboarding.probation.no',
    GROUP = 'onboarding.probation.group',
    PREFIX = 'onboarding.probation.prefix',
    NAME = 'onboarding.probation.name',
    COMPETENCE = 'onboarding.probation.competence',
    EMAIL = 'onboarding.probation.email',
    PHONE = 'onboarding.probation.phone',
    REMARK = 'onboarding.probation.remark',
    JOINING_DATE = 'onboarding.probation.joining-date',
    ACTION = 'onboarding.probation.action'
}

/** Probation pending table column keys */
export enum PROBATION_PENDING_COL_KEYS {
    NO = 'no',
    GROUP = 'group',
    PREFIX = 'prefix',
    NAME = 'name',
    COMPETENCE = 'competence',
    EMAIL = 'email',
    PHONE = 'phone',
    REMARK = 'remark',
    JOINING_DATE = 'joiningDate',
    ACTION = 'action'
}

/** Associate input fields */
export enum ASSOCIATE_FIELDS {
    NAME = 'onboarding.associate-modifier.name',
    EMAIL = 'onboarding.associate-modifier.email',
    PHONE = 'onboarding.associate-modifier.phone',
    REMARK = 'onboarding.associate-modifier.remark',
    GROUP = 'onboarding.associate-modifier.group',
    PREFIX = 'onboarding.associate-modifier.prefix',
    JOINING_DATE = 'onboarding.associate-modifier.joining-date',
    COMPETENCE = 'onboarding.associate-modifier.competence',
    FRESHER = 'Fresher',
    JUNIOR = 'Junior',
    SENIOR = 'Senior',
    INTERNSHIP = 'Internship',
    ARCHITECT = 'Architect',
    MANAGER = 'Manager'
}

/** Associate input field keys */
export enum ASSOCIATE_FIELD_KEYS {
    NAME = 'name',
    EMAIL = 'email',
    PHONE = 'phone',
    GROUP = 'group',
    JOINING_DATE = 'joiningDate',
    COMPETENCE = 'competence'
}

/** Induction task fields */
export enum INDUCTION_TASK_FIELDS {
    TASK = 'onboarding.task-modifier.task',
    DURATION = 'onboarding.task-modifier.duration',
    REMARK = 'onboarding.task-modifier.remark',
    ATTACHMENT = 'onboarding.task-modifier.attachment',
    DESCRIPTION = 'onboarding.task-modifier.description'
}

/** Induction task field keys */
export enum INDUCTION_TASK_FIELD_KEYS {
    TASK = 'task',
    DURATION = 'duration',
    DESCRIPTION = 'description',
    REMARK = 'remark'
}

/** Induction notification fields */
export enum INDUCTION_NOTIFICATION_FIELDS {
    MESSAGE = 'onboarding.induction.notification-sender.message'
}

/** Induction notification field keys */
export enum INDUCTION_NOTIFICATION_FIELD_KEYS {
    MESSAGE = 'message'
}

/** Probation task fields */
export enum PROBATION_TASK_FIELDS {
    TASK = 'onboarding.task-modifier.task',
    DURATION = 'onboarding.task-modifier.duration',
    REMARK = 'onboarding.task-modifier.remark',
    ATTACHMENT = 'onboarding.task-modifier.attachment',
    DESCRIPTION = 'onboarding.task-modifier.description'
}

/** Probation task field keys */
export enum PROBATION_TASK_FIELD_KEYS {
    TASK = 'task',
    DURATION = 'duration',
    DESCRIPTION = 'description',
    REMARK = 'remark'
}

/** Induction page */
export enum INDUCTION {
    TO_DO = 'to-do',
    TO_DO_ADD = 'to-do-add',
    PENDING = 'pending'
}

/** Probation page */
export enum PROBATION {
    TO_DO = 'to-do',
    TO_DO_ADD = 'to-do-add',
    PENDING = 'pending'
}
