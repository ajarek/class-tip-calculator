export class Input {
    constructor(type, placeholder, classInput) {
        this.type = type;
        this.placeholder = placeholder;
        this.classInput = classInput;
    }
    render() {
        const input = document.createElement("input");
        input.type = this.type;
        input.classList.add(this.classInput);
        input.placeholder = this.placeholder;
        return input;
    }
}
