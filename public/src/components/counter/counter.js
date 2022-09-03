class Like extends HTMLElement {

    static get observedAttributes(){
        return ["count"];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.mount();
    }

    connectedCallback(){
        this.mount();
    }

    disconnectedCallback(){
        this.removeEventListeners();
    }

    constructor(){
        super();
        this.attachShadow({mode : 'open' });
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    mount(){
        this.render();
        this.addEventListeners();
    }

    addEventListeners(){
        this.shadowRoot.querySelector("img").addEventListener("click", this.onButtonClicked);
    }
    
    render(){
        this.shadowRoot.innerHTML = `
        <div class="like">
        <link rel="stylesheet" href="/src/components/profile/style.css">
            <img class="like_img" src="./src/icons/like.png">
            <h2>${this.count || 0}</h2>
        </div>
        `;
    }

    removeEventListeners(){
        this.shadowRoot.querySelector("img").addEventListener("click", this.onButtonClicked);
    }

    onButtonClicked() {
        const currentValue = Number(this.getAttribute("count")) || 0;
        this.setAttribute("count", currentValue + 1);
    }
}

class Dislike extends HTMLElement {

    static get observedAttributes(){
        return ["count"];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.mount();
    }

    connectedCallback() {
        this.mount();
    }

    disconnectedCallback() {
        this.removeEventListeners();
    }

    constructor(){
        super();
        this.attachShadow({mode : 'open' });
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    mount(){
        this.render();
        this.addEventListeners();
    }

    addEventListeners() {
        this.shadowRoot.querySelector("img").addEventListener("click", this.onButtonClicked);
    }
    
    render(){
        this.shadowRoot.innerHTML = `
        <div class="dislike">
        <link rel="stylesheet" href="/src/components/profile/style.css">
            <img class="dislike_img" src="./src/icons/dislike.png">
            <h2>${this.count || 0}</h2>
        </div>
        `;
    }

    removeEventListeners(){
        this.shadowRoot.querySelector("img").addEventListener("click", this.onButtonClicked);
    }

    onButtonClicked() {
        const currentValue = Number(this.getAttribute("count")) || 0;
        this.setAttribute("count", currentValue + 1);
    }
}

customElements.define("my-counter", Like);
customElements.define("my-counter2", Dislike);

export default Like; Dislike;
