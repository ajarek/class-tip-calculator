export class Select {
    constructor(classSelect) {
        this.classSelect = classSelect;
    }
    render() {
        const select = document.createElement('select');
        select.classList.add(this.classSelect);
        const option = document.createElement('option');
        option.innerHTML = 'Choose...';
        option.value = '';
        const option0 = document.createElement('option');
        option0.value = '0.20';
        option0.innerText = 'Great - 20%';
        const option1 = document.createElement('option');
        option1.value = '0.10';
        option1.innerText = 'Good - 10%';
        const option2 = document.createElement('option');
        option2.value = '0.02';
        option2.innerText = 'Bad - 2%';
        select.append(option, option0, option1, option2);
        return select;
    }
}
