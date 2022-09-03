import * as components from "./components/index.js"
import data from './components/data.js'

console.log(data);

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        })
    }

    connectedCallback() {
        this.render();
    }
    render() {
        data.forEach((element) => {
            this.shadowRoot.innerHTML += `
          <my-profile uuid="${element.id}" name="${element.name}" description="${element.description}" age="${element.age}">pictureprofile="${element.pictureprofile}"></my-profile>
          `;
        });


    }
}
customElements.define('app-container', AppContainer);