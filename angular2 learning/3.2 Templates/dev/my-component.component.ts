import {Component} from 'angular2/core'


@Component({
    selector:'my-component',
    template: `<p>Hi, i´m <span [style.color]="inputElement.value === 'yes'? 'red':''">{{name}}</span>  and this is my very first 
Angular 2 component! <span [class.is-awesome]="inputElement.value==='yes'">It´s so awsome</span></p>
<br>
<br>
<input type="text" #inputElement (keyup)="0">
<p>{{inputElement.value}}</p>
<br><br>
<button [disabled]="inputElement.value==='yes'">Only enabled id 'yes' was enterd</button>

    `,
    styleUrls:["src/css/mycomponent.css"]
})

export class MyComponentComponent{
    name ="anton";
}