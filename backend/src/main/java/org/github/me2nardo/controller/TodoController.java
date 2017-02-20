package org.github.me2nardo.controller;

import org.github.me2nardo.dao.TodoDao;
import org.github.me2nardo.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;

/**
 * Created by leo on 15.02.17.
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api/todo")
public class TodoController {

    @Autowired
    private TodoDao todoDao;


    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getTodoList(){
        return new ResponseEntity(todoDao.findAll(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Todo> addTodo(@RequestBody @Validated Todo todo){
        Todo result = todoDao.save(todo);
        return new ResponseEntity(result,HttpStatus.CREATED);
         }

    @RequestMapping(value = "{id}",method = RequestMethod.DELETE)
    public void deleteTodo(@PathVariable("id") Long id){
        todoDao.delete(id);
    }

    @RequestMapping(value = "{id}",method = RequestMethod.GET)
    public ResponseEntity getTodoById(@PathVariable("id") String id){
        return new ResponseEntity(todoDao.findOne(Long.valueOf(id)),HttpStatus.OK);
    }

    @RequestMapping(value = "{id}",method = RequestMethod.PUT)
    public ResponseEntity updateTodo(@RequestBody Todo todo){
        return new ResponseEntity(todoDao.saveAndFlush(todo),HttpStatus.OK);
    }
}
