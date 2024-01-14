import { Router } from '@angular/router';
import { Task } from './../../models/task';
import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {

  task: Task;

  constructor(
    private router: Router,
    private taskService: TaskService
  ) {
    this.task = new Task();
    this.task.isCompleted = false;
  }

  public onSubmit() {
    this.taskService.save(this.task).subscribe(result => this.returnToHome());
  }

  public returnToHome() {
    this.router.navigate(['']);
  }
}
