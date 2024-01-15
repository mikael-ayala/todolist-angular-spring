import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
    tasks: Task[] = [];

    task: Task = new Task();

    constructor(
      private router: Router,
      private taskService: TaskService
    ) {}

    ngOnInit(): void {
      this.findAll();
    }

    public onClick(): void {
      this.router.navigate(['save']);
    }

    public onCheckboxChange(event: any, id: number): void {
      this.taskService.findById(id).subscribe(task => {
        this.task = task;
        this.task.isCompleted = event.target.checked;
        this.taskService.update(this.task, id).subscribe();
      });
    }

    public findAll(): void {
      this.taskService.findAll()
        .subscribe(task => this.tasks = task);
    }

    public update(id: number): void {
      this.taskService.setId(id);
      this.router.navigate(['update']);
    }

    public delete(id:number): void {
      this.taskService.delete(id).subscribe(() => this.findAll());
    }
}
