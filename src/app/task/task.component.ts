import { Component, Input } from '@angular/core';
import { Task, StatusType } from '../constants';
import { TaskService } from '../task.service';
import { UtilService } from '../util.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent {
    @Input() task: Task;
    @Input() taskStatus: StatusType;

    constructor(private taskService: TaskService, private utilService: UtilService) { }

    statusTypes: String[] = this.utilService.getStatusTypes();

    handleChange(taskId: number, status: StatusType) {
        this.taskService.updateTask(taskId, status);
    }
}
