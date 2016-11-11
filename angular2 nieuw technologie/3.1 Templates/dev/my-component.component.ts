import {Component} from 'angular2/core'


@Component({
    selector:'my-component',
    template: `<p>Hi, i´m {{name}} and this is my very first 
Angular 2 component! <span [class.is-awesome]="inputElement.value==='yes'">It´s so awsome</span></p>
<br>
<br>
<input type="text" #inputElement (keyup)="0">
<p>{{inputElement.value}}</p>

    `,
    styleUrls:["src/css/mycomponent.css"]
})

export class MyComponentComponent{
    name ="anton";
}