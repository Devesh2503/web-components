

class LifecycleButton extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.render();
        console.log("constructor : Button instance created")
    }

    connectedCallback(){
        console.log('connected call Back : Button added to the dom');
        this.updeate();
    }

    disconnectedCallback(){
        console.log('disconnectedCallback : Button added to the Dom')
    }

    attributeChangedCallback(name ,oldValue ,newValue){
        console.log(`attributeChangedCallback: ${name} changed from ${oldValue} to ${newValue}`)
    }

    render(){
        this.shadowRoot.innerHTML =`
        <style>
        button{
        padding: 10px 10px;
        font-size: 16px;
        border:none;
        border-radius :5px;
        cursor:pointer;
        transistion: background 0.3s;
        }

        button: hover{
        opacity:-.8;}
        </style>

        <button></button>
        `;
    }

    updeate(){
        const button =this.shadowRoot.querySelector('button');
        button.textContent=this.getAttribute('label') || "Click Me";
        button.style.backgroundColor=this.getAttribute('color') || '#007bff';
        button.style.color = '#fff';
        button.style.fontWeight='900';
    }
}

customElements.define('lifecycle-button',LifecycleButton);