export class NewcomerTask {

    task: string;
    description: string;
    duration: number;
    remark: string;
    files: any;
    id: number;
    status: string;
    checklistType: string;

    constructor(task: string, description: string, duration: number, remark: string,
                files: any, id?: number, status?: string, checklistType?: string) {
        this.task = task;
        this.description = description;
        this.duration = duration;
        this.remark = remark;
        this.files = files;
        this.id = id;
        this.status = status;
        this.checklistType = checklistType;
    }
}
