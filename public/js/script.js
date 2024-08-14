class SPA {
    constructor() {
        this.routes = {
            "/" : "/index.ejs",
            "/about" : "/scss/style.css",
            "/contact" : "/contact.ejs"
        }
        this.stopReload();
        this.handleLocation();
        window.addEventListener("popstate" , () => this.handleLocation())
    }
    stopReload() {
        const navAnchors = document.getElementsByClassName("nav-list-items");
        for(let anchor of navAnchors) {
            anchor.addEventListener("click", function(e) {
                e.preventDefault();
                history.pushState({}, "", e.target.href);

            })
        }
    }
    async handleLocation() {
        const path = window.location.pathname;
        console.log(path)
        const route = this.routes[path];
        console.log(route)
        const html = await fetch(route).then(res => res.text());
        console.log(html)
        document.getElementById("root").innerHTML = html;
    }
}


document.addEventListener("DOMContentLoaded", () => new SPA())