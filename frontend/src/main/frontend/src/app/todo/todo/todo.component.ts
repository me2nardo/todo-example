import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'selector-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  selectedTodo:Todo;
  todoList:Todo[];


  constructor(private todoService:TodoService,
              private router: Router) { }

   getTodo():void{
    this.todoService.getTodoList().subscribe((todo:Todo[])=>{this.todoList=todo});
   }


  addTodo(title:string):void{
    title = title.trim();
    if (!title) { return; }
    this.todoService.addTodo(title).subscribe(todo=>{
      console.log(todo.title);
    this.todoList.push(todo),
    this.selectedTodo=null;}
   );


   }

   deleteTodo(todo:Todo):void{
    this.todoService.deleteTodo(todo.id).subscribe(()=>{
      console.log("Inside");
      this.getTodo();
      this.selectedTodo = null;
    });

   }

  ngOnInit():void {
    this.getTodo();
  }

  onSelect(todo:Todo){
     this.selectedTodo = todo;
  }

  gotoDetail():void {
     this.router.navigate(['/todo',this.selectedTodo.id]);
  }

}
