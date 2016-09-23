import {Component, Input} from 'angular2/core';

@Component({
    selector:'todo-list',
    templateUrl:'./app/todo/todo-list.component.html',

})
export class TodoListComponent{
    @Input() todos:string[];
}