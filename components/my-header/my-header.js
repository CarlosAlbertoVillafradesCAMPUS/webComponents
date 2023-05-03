let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");

export default class myHeader extends HTMLElement{
    static async component(){
        return await(await fetch(pathName.replace(".js", ".html"))).text()
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(myHeader.component()).then(html=>{
            this.shadowRoot.innerHTML = html
        })
    }
}
customElements.define(name, myHeader)