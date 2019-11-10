console.log('123334');

class AppComponent extends HTMLElement {
    get message() {
        return this.getAttribute("message");
    }

    set message(message) {
        this.setAttribute('message', message)
    }

    constructor() {
        super()
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `<style>h4 {color: red;}</style><h4>${this.message}</h4><button onclick="">button</button>`;
    }
}

customElements.define('app-component', AppComponent);