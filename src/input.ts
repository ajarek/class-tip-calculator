export class Input{
    type :string;
    placeholder:string;
    classInput:string;
    constructor(type:string,placeholder:string,classInput:string){
        this.type = type;
        this.placeholder = placeholder;
        this.classInput = classInput;
    }
    render(){
        const input = document.createElement('input');
        input.type = this.type;
        input.placeholder = this.placeholder;
        input.classList.add(this.classInput);
        return input;
    }
}