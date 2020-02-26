import { Associate } from '../associate/associate';
import { NewcomerTask } from '../associate/newcomer-task';

export class InductionPendingTask {

    newcomer: Associate;
    assigment: NewcomerTask;
    dueDate: string;
    status: string;
    remark: string;
    id: number;

    constructor(newcomer: Associate, assigment: NewcomerTask, dueDate: string, status: string, remark: string, id?: number) {
        this.newcomer = newcomer;
        this.assigment = assigment;
        this.dueDate = dueDate;
        this.status = status;
        this.remark = remark;
        this.id = id;
    }
}
