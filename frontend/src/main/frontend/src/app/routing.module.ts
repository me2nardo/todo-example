import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from "./todo/todo/todo.component";
import {TodoDetailComponent} from "./todo/todo-detail/todo-detail.component";



const routes: Routes = [
  { path: '', component: TodoComponent, pathMatch: 'full' },
  { path: 'todo/:id', component: TodoDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
