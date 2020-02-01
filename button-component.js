const buttonTemp = document.createElement('template');
buttonTemp.innerHTML = `
<style>
    button{
        background-color:green;
        color:white;
        border:1px solid white;
        border-radius:10px;
        padding:10px;
        cursor:pointer;
    }
    button:hover{
        background-color:blue;
    }
</style>
<button></button>`;

class Button extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(buttonTemp.content.cloneNode(true));
        this.shadowRoot.querySelector('button').innerHTML = this.getAttribute('name');

    }
}

window.customElements.define('button-component',Button);