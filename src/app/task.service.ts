import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, StatusType } from './constants';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  // add class properties for:
  //
  // a task id counter
  // an internal array of Task objects
  // an instance of BehaviorSubject

  getTasks(status: StatusType): Observable<Task[]> {
    // return an observable of a task array, filtered by the passed in status...
    return null;
}

  updateTask(id: number, status: StatusType) {
    // complete the code to update a task's status...
  }

  addTask(title: string, description: string) {
    // complete the code to add a task...
  }
}
