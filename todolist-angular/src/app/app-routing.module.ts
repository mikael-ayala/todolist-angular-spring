import { TaskUpdateFormComponent } from './components/task-update-form/task-update-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'save', component: TaskFormComponent},
  {path: 'update', component: TaskUpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
