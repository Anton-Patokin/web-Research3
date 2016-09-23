import {Component, Input} from 'angular2/core';
import {TodoItem} from "./todo/todo-item.component";

@Component({
    selector:'todo-list',
    templateUrl:'./app/todo/todo-list.component.html',
    directives:[TodoItem],
    styleUrls:['./app/todo/todo-list.component.css']

})
export class TodoListComponent{
    @Input() todos:string[];
}