import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-taskform',
    templateUrl: './taskform.component.html',
    styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
    taskForm: FormGroup;
    constructor() { }

    ngOnInit() {
        this.taskForm = new FormGroup({
            title: new FormControl('', [Validators.required,
                                        Validators.minLength(3),
                                        Validators.maxLength(30)])
        });
    }

    get title() { return this.taskForm.get('title'); }
}
