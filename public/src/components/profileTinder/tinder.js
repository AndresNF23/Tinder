class ProfileTinder extends HTMLElement{

    static get observedAttributes() {
        return["name","age","description","profilepicture",""];   
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
        <header class="header">
        <img src=".icons/LogoTinder.png" />
    </header>
    <section class="section">
        <article class="article article--1">
            <article class="imagen">
                <img src= "${this.pictureprofile}" />
            </article>
            <article class="description">
                <div class="titles">
                    <h1 id="name" class="name">${this.name}</h1> 
                    <h2 id="age" class="age">${this.age}</h2>
                </div>
                <div class="subtitle">
                    <h3 class="sub"></h3>

                </div>

            </article>

        </article>
        <article class="article article--2">
        <img class="equis" src="./icons/Equis.png"></img>
        <img class="like"src="./icons/Like.png"></img>
        </article>

    </section>`;
        }
    }

    customElements.define('my-profile', ProfileTinder);
    export default ProfileTinder;