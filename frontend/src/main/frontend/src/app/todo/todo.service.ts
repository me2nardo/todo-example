import { Injectable } from '@angular/core';
import {Headers, Http,Response} from "@angular/http";
import {Todo} from "./todo";

import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

import 'rxjs/Rx';
@Injectable()
export class TodoService {

  private headers;

  private baseUrl = 'http://localhost:8081/api/todo';

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }


  getTodoList():Observable<Todo[]>{
    return this.http.get(this.baseUrl)
      .map((response: Response) => <Todo[]> response.json())
      .catch(this.handleError);
  }

  getTodoById(id:number):Observable<Todo>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url)
      .map(data=>data.json())
      .catch(this.handleError);
  }

  addTodo(title:string):Observable<Todo>{

    return this.http.post(this.baseUrl,
      {title},
         { headers: this.headers })
      .map(data=>data.json())
      .catch(this.handleError);

  }

  deleteTodo(id:number):Observable<void>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url,{headers: this.headers}).catch(this.handleError);
  }

  updateTodo(todo:Todo): Observable<Todo> {
    const url = `${this.baseUrl}/${todo.id}`;
    let body = JSON.stringify(todo);
    return this.http
      .put(url, body, { headers: this.headers })
      .map(data=>data.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.defer(error.message || error);
  }


}

