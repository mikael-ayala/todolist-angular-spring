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
      this.taskService.findAll()
      .subscribe(task => this.tasks = task);
    }

    public onClick() {
      this.router.navigate(['save']);
    }
}
