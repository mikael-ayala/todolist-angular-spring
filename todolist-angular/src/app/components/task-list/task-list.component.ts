import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
    tasks: Task[] = [];

    constructor(private taskService: TaskService) {}

    ngOnInit(): void {
      this.taskService.findAll()
      .subscribe(task => this.tasks = task);
    }
}
