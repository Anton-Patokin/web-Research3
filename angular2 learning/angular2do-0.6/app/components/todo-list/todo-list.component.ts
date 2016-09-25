import {Component, OnInit} from '@angular/core';

import { Todo } from '../../shared/todo.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import {TodoService} from "../../shared/todo.service";

@Component({
    selector: 'todo-list',
    templateUrl: './app/components/todo-list/todo-list.component.html',
    styleUrls: ['./app/components/todo-list/todo-list.component.css'],
    directives: [TodoItemComponent],
    providers:[TodoService]
})
export class TodoListComponent implements OnInit{
    todos: Todo[];


    constructor(private TodoService:TodoService){
        this.todos=[];

    }
    ngOnInit(){
        this.todos =this.TodoService.getTodos();
        console.log('OnInet');
    }

    get sortedTodos() {
        return this.todos
        .map(todo => todo)
        .sort((a, b) => {
            if (a.title > b.title) return 1;
            else if (a.title < b.title) return -1;
            else return 0;
        })
        .sort((a, b) => {
            if (a.done && !b.done) return 1;
            else if (!a.done && b.done) return -1;
            else return 0;
        });
    }

    onTodoDeleted(todo: Todo) {
        if (todo) {
            let index = this.todos.indexOf(todo);

            if (index > -1) {
                this.todos.splice(index, 1);
            }
        }
    }
}