const express = require('express'); // importa o módulo
const app = express(); // inclui ele na aplicação
const estoque = require('./estoque/estoque');

app.get("/", function(req,res){
    res.send("API Estoque");
})

app.get("/api/adicionar/:id/:nome/:qtde", function(req,res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qtde = req.params.qtde;

    let p = estoque.criarProduto(id,nome,qtde);
    estoque.adicionarProduto(p);
    res.json(p);
})

app.get("/api/editar/:id/:qtdeAtual", function(req,res){
    let id = req.params.id;
    let qtdeAtual = req.params.qtdeAtual;

    res.json(estoque.editarProduto(id,qtdeAtual));
})

app.get("/api/remover/:id", function(req,res){
    let id = req.params.id;

    res.json(estoque.removerProduto(id));
})

const PORT = 8080; // porta comum do computador
app.listen(PORT, function(){ //fazendo a aplicação conectar à porta
    console.log("app rodando na porta " + PORT);
});

app.get("/api/listar", function(req,res){
    res.json(estoque.listarProdutos());
})