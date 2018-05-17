import { Component, OnInit, Input } from '@angular/core';
import { Task, StatusType } from '../constants';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    @Input() task: Task;
    @Input() taskStatus: StatusType;

    statusTypes: StatusType[] = [
        StatusType.NotStarted, StatusType.InProgress, StatusType.Completed
    ];

    constructor(private taskService: TaskService) { }

    ngOnInit() {
    }

    handleChange(taskId: number, status: StatusType) {
        this.taskService.updateTask(taskId, status);
        console.log(taskId, status);
        console.log(this.taskService.taskList);
    }
}
