import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { TaskList, StatusType } from '../constants';
import { TaskService } from '../task.service';
import { UtilService } from '../util.service';

@Component({
    selector: 'app-taskboard',
    templateUrl: './taskboard.component.html',
    styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit, OnDestroy {
    constructor(private taskService: TaskService, private utilService: UtilService) { }

    cssShowHideTaskForm = false;
    taskList: TaskList;
    subscription: Subscription;
    statusTypes: String[] = this.utilService.getStatusTypes();

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
