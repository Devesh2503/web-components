

class CustomElement extends HTMLElement {

    constructor(){
        super(); // it will pull all the properties which are inside this super class i.e HTMLElements

       const shadow= this.attachShadow({mode:'open'});

        const divElement = document.createElement('div');
        const inputElement = document.createElement('input');
        inputElement.id="custom input element";

        const btnElement =document.createElement('button');
        btnElement.innerText="Submit";

        divElement.appendChild(inputElement);
        divElement.appendChild(btnElement);

       

        shadow.appendChild(divElement);
    }
}

customElements.define('custom-element', CustomElement);