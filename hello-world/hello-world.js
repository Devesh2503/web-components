class HelloWorld extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`
        <h1>Hello , Web components <h1/>
        `
    }
}

customElements.define("hello-world",HelloWorld);


/*
connectedCallback() runs when the element is added to the page.

customElements.define() registers the custom element.
*/