const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();
const PORT = 8080;

app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.use(express.urlencoded());

app.get("/formulario", (req, res) => {
    res.render("index.html");
});

app.post("/dados", (req, res) => {
    const {nome, email, telefone, dataAgendamento} = req.body;
    res.send(req.body);

    res.render("dados.html");
    
});

app.listen(PORT, () => {
    console.log("Porta: " + PORT);
});
