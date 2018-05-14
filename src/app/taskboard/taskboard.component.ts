import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-taskboard',
    templateUrl: './taskboard.component.html',
    styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit {
    cssShowHideTaskForm = false;
    constructor() { }

    ngOnInit() {
    }

    handleClickNewTask() {
        this.cssShowHideTaskForm = !this.cssShowHideTaskForm;
    }
}
