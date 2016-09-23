import {Component} from 'angular2/core';

@Component({
    selector: 'todo-app',
    templateUrl:'./app/app.component.html',
    styleUrls:['./app/app.component.css']
})
export class AppComponent {
    titel: string;
    todos:string[];

    constructor(){
        this.titel ="Angular2 2Do";
        this.todos =[];
    }
    addTodo(input:HTMLInputElement){
        let title= input.value;
        input.value ="";
        this.todos.push(title);

        );
    }

}