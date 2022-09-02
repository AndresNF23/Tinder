class ProfileTinder extends HTMLElement{

    static get observedAttributes() {
        return["uuid","name","age","description","profilepicture"];   
    }

    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
      }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
      }
    
    render(){
        this.shadowRoot.innerHTML = `<link rel="stylesheet" href="/src/components/profileTinder/styles.css">
        <section class="tinder">
        <header class="header">
        <img class="logo" src="./src/icons/LogoTinder.png" />
    </header>
    <section class="section">
        <article class="article article--1">
            <article class="imagen">
                <img class="profileimg" src= "./src/icons/persona.jpg" />
            </article>
            <article class="description">
                <div class="titles">
                    <h1 id="name" class="name">${this.name}</h1> 
                    <h2 id="age" class="age">${this.age}</h2>
                </div>
                <div class="subtitle">
                    <p class="sub">${this.description}</p>

                </div>

            </article>

        </article>
        <article class="article article--2">
            <img class="icon equis" src="./src/icons/Equis.png"></img>
            <img class="icon like"src="./src/icons/Like.png"></img>
        </article>

    </section>
    </section>`;
        }
    }

    customElements.define('my-profile', ProfileTinder);
    export default ProfileTinder;