const textboxTemp = document.createElement('template');
textboxTemp.innerHTML = `
<style>
    input{
        margin:10px;
        padding:10px;
        font:30px;
    }
</style>
<input></input>`
class TextBox extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(textboxTemp.content.cloneNode(true));
        this.shadowRoot.querySelector('input').placeholder = this.getAttribute('placeholder');
    }
}
window.customElements.define('textbox-component',TextBox);