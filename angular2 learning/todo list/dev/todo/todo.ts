export class Todo{
    titel:string;
    done:boolean;

    constructor(title:string){
        this.titel=title;
        this.done = false;
    }
}