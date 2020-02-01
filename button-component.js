const buttonTemp = document.createElement('template');
buttonTemp.innerHTML = `<button></button>`;

class Button extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(buttonTemp.content.cloneNode(true));
        this.shadowRoot.querySelector('button').innerHTML = this.getAttribute('name');

    }
}

window.customElements.define('button-component',Button);