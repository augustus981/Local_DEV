export class InductionMessage {

    userID: number;
    taskID: number;
    message: string;

    constructor(userID: number, taskID: number, message: string) {
        this.userID = userID;
        this.taskID = taskID;
        this.message = message;
    }
}
