import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TaskList, StatusType, statusTypes } from '../constants';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-taskboard',
    templateUrl: './taskboard.component.html',
    styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit, OnDestroy {
    constructor(private taskService: TaskService) { }

    cssShowHideTaskForm = false;
    taskList: TaskList;
    subscription: Subscription;
    compStatusTypes: StatusType[] = statusTypes;

    ngOnInit(): void {
        this.subscription = this.taskService.getTasks()
                                .subscribe(list => this.taskList = list);
        console.log('taskboard-utilService', this.compStatusTypes); // For testing purpose
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    handleClickNewTask() {
        this.cssShowHideTaskForm = !this.cssShowHideTaskForm;
    }

    filterTaskList(statusType: StatusType, taskList: TaskList) {
        return this.taskService.filteredTasks(statusType, taskList);
    }
}
