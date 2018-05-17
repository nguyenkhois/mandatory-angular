import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Task, TaskList, StatusType } from '../constants';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-taskboard',
    templateUrl: './taskboard.component.html',
    styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {
    cssShowHideTaskForm = false;
    taskList: TaskList;
    subscription: Subscription;
    statusTypes: StatusType[] = [
        StatusType.NotStarted, StatusType.InProgress, StatusType.Completed
    ];

    constructor(private taskService: TaskService) { }

    ngOnInit() {
        this.subscription = this.taskService.getTasks()
                                .subscribe(list => this.taskList = list);
    }

    ngOndestroy() {
        this.subscription.unsubscribe();
    }

    handleClickNewTask() {
        this.cssShowHideTaskForm = !this.cssShowHideTaskForm;
    }

    filterTaskList(statusType: StatusType, taskList: TaskList) {
        return this.taskService.filteredTasks(statusType, taskList);
    }
}
