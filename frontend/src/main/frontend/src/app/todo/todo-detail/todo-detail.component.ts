import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Todo} from "../todo";
import { Location }               from '@angular/common';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo:Todo;

  constructor(private todoService:TodoService,
              private route:ActivatedRoute,
              private location:Location){}


  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.todoService.getTodoById(+params['id']))
      .subscribe(todo => this.todo = todo);
  }
  updateTodo(){
    this.todoService.updateTodo(this.todo).subscribe(()=>this.goBack());
  }

  goBack(){
    this.location.back();
  }

}
