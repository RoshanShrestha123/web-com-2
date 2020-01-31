class CustomTag extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `<h2>${this.getAttribute('name')}</h2>`;
    }
}

window.customElements.define('custom-tag',CustomTag);