import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Task, TaskList, StatusType } from '../constants';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-taskboard',
    templateUrl: './taskboard.component.html',
    styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit, OnDestroy {
    cssShowHideTaskForm = false;
    taskList: TaskList;
    subscription: Subscription;
    statusTypes: StatusType[] = [
        StatusType.NotStarted, StatusType.InProgress, StatusType.Completed
    ];

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.subscription = this.taskService.getTasks()
                                .subscribe(list => this.taskList = list);
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
