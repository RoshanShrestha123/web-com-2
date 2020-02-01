const template = document.createElement('template');
template.innerHTML = `<style>h2{color:blue}</style><h2></h2>`;

class CustomTag extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h2').innerHTML = this.getAttribute('name');
    }
}
window.customElements.define('custom-tag',CustomTag);