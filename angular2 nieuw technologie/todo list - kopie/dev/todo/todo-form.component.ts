import {Component, Output,EventEmitter} from 'angular2/core';
import {Todo} from "./todo";

@Component(
    {
        selector: 'todo-form',
        templateUrl: './app/todo/todo-form.components.html',
        styleUrls:['./app/todo/todo-form.components.css']
    }
)

export  class TodoFormComponent{
    @Output() added =new EventEmitter();
    add(title:HTMLInputElement){
        if(title.value){
            console.log(title);
            this.added.emit(new Todo(title.value));
            title.value="";
        }
    }
}