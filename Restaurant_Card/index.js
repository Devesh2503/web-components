

class RestaurantItem extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:'open'});

      
        this.render();
    }

    render(){
        
        const image = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cntraveller.in%2Fstory%2Fthe-insiders-guide-to-punes-best-biryani%2F&psig=AOvVaw0Ee63H6pDTfwBjDfCVQdcv&ust=1739300705224000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjCiJDnuYsDFQAAAAAdAAAAABAE";
        const name =this.getAttribute("name") || "Biryani";

        const price =this.getAttribute("price") || 'Rs.100';

        const description = this.getAttribute('description') || "No description avilable";
        this.shadowRoot.innerHTML=`
        <style>
          :host {
                    display: flex;
                    flex-direction: column;
                    width: 250px;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 10px;
                    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    background: #fff;
                    font-family: Arial, sans-serif;
                }

                img {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                    border-radius: 10px;
                }

                .name {
                    font-size: 18px;
                    font-weight: bold;
                    margin: 10px 0;
                }

                .price {
                    font-size: 16px;
                    color: #28a745;
                    font-weight: bold;
                }

                .description {
                    font-size: 14px;
                    color: #555;
                }

                button {
                    margin-top: 10px;
                    padding: 8px 12px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #0056b3;
                }
        </style>

        <img src ="${"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.licious.in%2Fblog%2Frecipe%2Fhyderabadi-chicken-biryani-recipe-2&psig=AOvVaw0Ee63H6pDTfwBjDfCVQdcv&ust=1739300705224000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjCiJDnuYsDFQAAAAAdAAAAABAI"}" atr="${name}">
        <div class="name">${name}</div>
        <div class="price">${price}</div>
        <div class="description">${description}</div>
        <button class="add-to-cart">Add to Cart</button>
        `;

        this.shadowRoot.querySelector(".add-to-cart").addEventListener("click",()=>{
            alert(`${name} added to the cart!`);
        });
    }

    
}

customElements.define("restaurant-item",RestaurantItem);