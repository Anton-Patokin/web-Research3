

import {Injectable} from "@angular/core";
import {todos} from './todo.data';
import {ITodo} from "./todo.model";
@Injectable{

}
export class TodoService{
    getTodos(): ITodo[]{
        return todos;
    }
}