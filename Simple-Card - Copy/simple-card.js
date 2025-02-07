/*



class SimpleCard extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode:"open"});

        this.shadowRoot.innerHTML=`
        <style>
        :host{ display : block ; padding : 10px ; border: 1px solid black;}
        </style>

        <div>
        <h2> Card_Title</h2>
        <p>This is simple card component </p>
        </div>
        `;
    }
}

customElements.define("simple-card", SimpleCard);

*/

class SimpleCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      this.shadowRoot.innerHTML = `
        <style>
          :host { display: block; padding: 10px; border: 1px solid #ccc; }
        </style>
        <div>
          <h2>Card Title</h2>
          <p>This is a simple card component.</p>
        </div>
      `;
    }
  }
  
  customElements.define("simple-card", SimpleCard);


  /*

this.attachShadow({ mode: "open" }) creates a Shadow DOM.
Styles inside Shadow DOM don’t affect the main document.

  */
  