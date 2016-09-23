import {Component} from 'angular2/core';
import {TodoListComponent} from "./todo-list.component";
import {Todo} from "./todo/todo";



@Component({
    selector: 'todo-app',
    templateUrl:'./app/app.component.html',
    styleUrls:['./app/app.component.css'],
    directives:[TodoListComponent],
})
export class AppComponent {
    titel: string;
    todos:Todo[];

    constructor(){
        this.titel ="Angular2 2Do";
        this.todos =[];
    }
    addTodo(input:HTMLInputElement){
        let title= input.value;
        input.value ="";
        this.todos.push( new Todo(title));
    }

}