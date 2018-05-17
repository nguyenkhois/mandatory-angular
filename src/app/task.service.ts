import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task, TaskList, StatusType } from './constants';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    // add class properties for:
    //
    // a task id counter
    // an internal array of Task objects
    // an instance of BehaviorSubject

    public taskList: TaskList = [];
    private objBehaviorSubject: BehaviorSubject<any>;

    constructor() {
        // this.taskList = [];
        this.objBehaviorSubject = new BehaviorSubject(this.taskList);
    }

    getTasks(): BehaviorSubject<TaskList> {
        return this.objBehaviorSubject;
    }

    filteredTasks(status: StatusType, taskList: TaskList) {
        return taskList.filter((item: Task) => item.status === status);
    }

    updateTask(id: number, status: StatusType) {
        // complete the code to update a task's status...
        const itemIndex = this.taskList.findIndex((item: Task) => item.id === id);
        this.taskList = this.taskList.map((item, index) => item.id === id && index === itemIndex ? { ...item, status: status } : item);
        return this.objBehaviorSubject.next(this.taskList);
    }

    addTask(title: string, description: string) {
        // complete the code to add a task...
        this.taskList = [...this.taskList, {
            id: Date.now(),
            status: StatusType.NotStarted,
            title: title,
            description: description
        }];
        return this.objBehaviorSubject.next(this.taskList);
    }
}
