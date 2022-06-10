export class Header {
    constructor(title, classHeader) {
        this.title = title;
        this.classHeader = classHeader;
    }
    render() {
        const header = document.createElement("div");
        header.classList.add(this.classHeader);
        const h1 = document.createElement("h1");
        h1.innerHTML = this.title;
        header.append(h1);
        return header;
    }
}
