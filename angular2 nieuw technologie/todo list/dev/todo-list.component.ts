import {Component, Input} from 'angular2/core';
import {TodoItem} from "./todo/todo-item.component";
import {Todo} from "./todo/todo";

@Component({
    selector:'todo-list',
    templateUrl:'../app/dev/todo-list/todo-list.component.html',
    directives:[TodoItem],
    styleUrls:['../app/dev/todo-list/todo-list.component.css']

})
export class TodoListComponent{
    @Input() todos:string[];
    onTodoDeleted(todo:Todo){
        if(todo){
            let index = this.todos.indexOf(todo);
            if(index > -1 ){
                this.todos.splice(index,1);

            }
        }
    }
}