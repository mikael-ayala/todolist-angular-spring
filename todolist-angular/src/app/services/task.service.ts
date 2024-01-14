import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl: string;

  private id: number = 0;

  constructor(private http: HttpClient) {
    this.tasksUrl = 'http://localhost:8080/tasks';
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
  }

  public findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  public findById(id: number): Observable<Task> {
    return this.http.get<Task>(this.tasksUrl + `/${id}`);
  }

  public save(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task);
  }

  public update(task: Task, id: number): Observable<Task> {
    return this.http.put<Task>(this.tasksUrl + `/${id}`, task);
  }
}
