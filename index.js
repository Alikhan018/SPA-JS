const express = require("express");
const path = require("path");

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.host = "127.0.0.1";
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("view engine", "ejs");
        this.app.set('views', path.join(__dirname, 'views'));
        this.start();
        this.routes();
    }
    routes() {
        this.app.get("/", (req,res) => {
            res.render("index");
        })
        this.app.get("/about", (req,res) => {
            res.render("about")
        })
    }
    start() {
        this.app.listen(this.port, this.host, ()=> {
            console.log(`Server running at http://${this.host}:${this.port}/`);
        });
    }
}

new Server();