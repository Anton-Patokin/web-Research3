import {Component} from 'angular2/core';

export class My_number {
    name:string;
}
@Component({
    selector: 'my-app',
    templateUrl: 'dev/html/index.html',
    styleUrls: ['dev/css/bootstrap.css']
})
export class AppComponent {
    names = [];

    my_number:My_number = {
        name: 'Windstorm'
    };

    add_watchers() {

        for (let i = 1; i < 5000; i++) {
            let newName = My_number = {
                name: i
            };
            this.names.push(newName);
        }
        console.log(this.names);
    }
}