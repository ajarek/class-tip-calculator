export class Button {
    constructor(classButton, text, type) {
        this.classButton = classButton;
        this.text = text;
        this.type = type;
    }
    render() {
        const button = document.createElement("button");
        button.classList.add(this.classButton);
        button.setAttribute("type", this.type);
        button.innerHTML = this.text;
        return button;
    }
}
