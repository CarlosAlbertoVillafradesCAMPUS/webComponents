/* let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", ""); */
import config from "../config.js";

export default class myHeader extends HTMLElement{
    static url = import.meta.url;
    static async component(){
        return await(await fetch(config.pathName(myHeader.url).replace(".js", ".html"))).text()
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        
    }
    handleEvent(e){
        (e.type === "click") ? this.eviarWorker(e) : undefined;
    }
    eviarWorker(e){
        console.log("estoy funcionando mi ñero")
        e.preventDefault();
    }
    connectedCallback(){
        Promise.resolve(myHeader.component()).then(html=>{
            this.shadowRoot.innerHTML = html
            this.myButton = this.shadowRoot.querySelector(".btn");
            this.myButton.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}
customElements.define(config.name(myHeader.url), myHeader)