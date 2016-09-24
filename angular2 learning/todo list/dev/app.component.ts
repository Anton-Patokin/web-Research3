import {Component} from 'angular2/core';
import {TodoListComponent} from "./todo-list.component";
import {Todo} from "./todo/todo";
import {TodoFormComponent} from "./todo/todo-form.component";



@Component({
    selector: 'todo-app',
    templateUrl:'./app/app.component.html',
    styleUrls:['./app/app.component.css'],
    directives:[TodoListComponent, TodoFormComponent],
})
export class AppComponent {
    titel: string;
    todos:Todo[];

    constructor(){
        this.titel ="Angular2 2Do";
        this.todos =[];
    }
    onTodoAdded(todo:Todo){

        this.todos.push( todo);
    }

}