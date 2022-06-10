import { Header } from "./header.js";
import { Label } from "./label.js";
import { Input } from "./input.js";
import { Select } from "./select.js";
import { Button } from "./button.js";
import { Result } from "./result.js";
class Calculator {
    constructor(container) {
        this.container = container;
        this.readInputs = this.readInputs.bind(this);
    }
    readInputs(e) {
        const altResult = document.querySelector(".result");
        if (altResult) {
            altResult.remove();
        }
        e.preventDefault();
        const inputs = this.container.querySelectorAll("input");
        const options = this.container.querySelectorAll("option");
        const tip = Number(inputs[0].value);
        const total = Number(inputs[1].value);
        const each = Number([...options].filter(el => el.selected)[0].value);
        const result = new Result(tip, total, each);
        const resultElement = result.render();
        this.container.appendChild(resultElement);
        this.validation();
    }
    render() {
        this.container.innerHTML = "";
        const header = new Header("TIP CALCULATOR", "title");
        const form = document.createElement("form");
        form.classList.add("form");
        form.addEventListener("submit", this.readInputs);
        const label = new Label("How Much Was Your Bill ?", "label");
        const input = new Input("number", '💲', "input");
        const label1 = new Label("How Many People Sharing The Bill ?", "label");
        const input1 = new Input("number", '👨‍👩‍👦', "input");
        const label2 = new Label("How Was Your Service", "label");
        const select = new Select("select");
        const button = new Button("button", "Calculate", "Submit");
        form.append(label.render(), input.render(), label1.render(), input1.render(), label2.render(), select.render(), button.render());
        container.append(header.render(), form);
    }
    validation() {
        const inputs = this.container.querySelectorAll("input");
        const options = this.container.querySelectorAll("option");
        if (inputs[0].value == "" || inputs[1].value == "" || [...options].filter(el => el.selected)[0].value == "") {
            alert("Please Fill All Fields");
            this.render();
        }
    }
}
const container = document.querySelector(".container");
const calculator = new Calculator(container);
calculator.render();
