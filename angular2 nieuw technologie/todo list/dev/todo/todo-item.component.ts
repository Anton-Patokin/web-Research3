import {Component, Input,Output,EventEmitter} from 'angular2/core';
import {Todo} from "./todo";

@Component({
    selector: 'todo-item',
    templateUrl: '../../app/dev/todo-item/todo-item.component.html',
    styleUrls:['../../app/dev/todo-item/todo-item.component.css'],


})

export class TodoItem{
    @Input() todo:Todo;
    @Output()deleted = new EventEmitter();
    toggleDone(){
        this.todo.done = !this.todo.done;
    }
    delete(){
        //console.log("deleted", this.todo);
        this.deleted.emit(this.todo);
    }
}