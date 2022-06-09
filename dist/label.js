export class Label {
    constructor(text, classLabel) {
        this.text = text;
        this.classLabel = classLabel;
    }
    render() {
        const label = document.createElement('label');
        label.classList.add(this.classLabel);
        label.innerHTML = this.text;
        return label;
    }
}
