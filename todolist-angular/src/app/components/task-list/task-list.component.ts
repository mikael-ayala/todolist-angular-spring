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

    constructor(
      private router: Router,
      private taskService: TaskService
    ) {}

    ngOnInit(): void {
      this.findAll();
    }

    public onClick() {
      this.router.navigate(['save']);
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
