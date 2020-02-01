const buttonTemp = document.createElement('template');
buttonTemp.innerHTML = `<button>testing</button>`;

class Button extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(buttonTemp.content.cloneNode(true));
    }
}

window.customElements.define('button-component',Button);