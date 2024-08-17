import { DatePipe } from "@angular/common";

export interface ITask {
    itemId: number;
    taskName: string;
    taskDescription: string;
    dueDate: string;
    createdOn: Date;
    isCompleted: boolean;
    tags: string;
    completedOn: Date;
}

export class Task {
    itemId: number;
    taskName: string;
    taskDescription: string;
    dueDate: string;
    createdOn: Date;
    isCompleted: boolean;
    tags: string;
    completedOn: Date;

    constructor(datePipe: DatePipe) {
        this.itemId = 0;
        this.taskName = "";
        this.taskDescription = "";
        this.dueDate = datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
        this.createdOn = new Date();
        this.isCompleted = false;
        this.tags = "";
        this.completedOn = new Date();
    }
}


export interface ApiResponseModel {
    message: string;
    result: string;
    data: any;
}