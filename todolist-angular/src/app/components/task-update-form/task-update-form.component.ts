import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-update-form',
  templateUrl: './task-update-form.component.html',
  styleUrl: './task-update-form.component.scss'
})
export class TaskUpdateFormComponent {

  task: Task = new Task();

  id: number = 0;

  constructor(
    private router: Router,
    private taskService: TaskService
  ) {
    this.id = taskService.getId();
    this.taskService.findById(this.id)
      .subscribe(task => this.task = task);
  }

  public onSubmit() {
    this.taskService.update(this.task, this.id).subscribe(result => this.returnToHome());
  }

  public returnToHome() {
    this.router.navigate(['']);
  }
}
