import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo/todo.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import {AppRoutingModule} from "./routing.module";
import {TodoService} from "./todo/todo.service";



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
