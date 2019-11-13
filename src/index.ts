import {html, render} from 'lit-html';


class AppComponent extends HTMLElement {
    get template() {
        return html`
            <h4>${this.message}</h4>
            <input type="text" .value=${this.message}>
            <button @click=${this.sayhello}>button</button>`
    }
    get message() {
        return this.getAttribute("message");
    }

    set message(message) {
        this.setAttribute('message', message)
    }

    constructor() {
        super();
    }

    sayhello(e: any) {
        console.log('hello')
    }

    keyChanged(e: any) {
        console.log(e);
    }

    connectedCallback() {     
        render(this.template, this);
    }
}

customElements.define('app-component', AppComponent);