import {Component, Input} from 'angular2/core';
@Component({
    selector: 'todo-item',
    templateUrl: './app/todo/todo-item.component.html',
    styleUrls:['./app/todo/todo-item.component.css'],


})

export class TodoItem{
    @Input() todo:string;
}