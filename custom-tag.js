class CustomTag extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML = `<style>h2{color:blue}</style><h2>${this.getAttribute('name')}</h2>`;
    }
}
window.customElements.define('custom-tag',CustomTag);