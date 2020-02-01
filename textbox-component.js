const textboxTemp = document.createElement('template');
textboxTemp.innerHTML = `<input></input>`
class TextBox extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(textboxTemp.content.cloneNode(true));
        
    }
}
window.customElements.define('textbox-component',TextBox);