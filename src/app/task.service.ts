import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Task, TaskList, StatusType } from './constants';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    taskList: TaskList;
    observer: any;

    constructor() {
        this.taskList = [];
     }
    // add class properties for:
    //
    // a task id counter
    // an internal array of Task objects
    // an instance of BehaviorSubject

    filteredTasks(status: StatusType, taskList: TaskList) {
        return taskList.filter(item => item.status === status);
    }

    getTasks(): Observable<TaskList> {
        return new Observable(localObserver => {
            this.observer = localObserver; // conver this.observer to an observer's child object which is overver
            this.observer.next(this.taskList);
        });
    }

    updateTask(id: number, status: StatusType) {
        // complete the code to update a task's status...
        const itemIndex = this.taskList.findIndex((item: Task) => item.id === id);
        this.taskList = this.taskList.map((item, index) => item.id === id && index === itemIndex ? { ...item, status: status } : item);
        return this.observer.next(this.taskList);
    }

    addTask(title: string, description: string) {
        // complete the code to add a task...
        this.taskList = [...this.taskList, {
            id: Date.now(),
            status: StatusType.NotStarted,
            title: title,
            description: description
        }];
        return this.observer.next(this.taskList);
    }
}
