export class Label {
  text: string;
  classLabel: string;
  constructor(text: string, classLabel: string) {
    this.text = text;
    this.classLabel = classLabel;
  }
  render() {
    const label = document.createElement("label");
    label.classList.add(this.classLabel);
    label.innerHTML = this.text;
    return label;
  }
}
