const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){

    let usuario = {
        nome: 'Mario',
        telefone: 2222222
        endereco: 'Rua 25 norte, lt 20'
        data: '05/10/2000'
    };
    res.render('index.html', {usuario});
});

app.use(express.urlencoded({extended: true}));

app.post('/dados', function(req,res){
    let usuario = {
        nome: req.body.nome,
        telefone: req.body.telefone
        endereco: req.body.endereco,
        data: req.body.dta
    };
    res.render('dados.html', {usuario});
});

const PORT = 8080;

app.listen(PORT, function(){
    console.log('app rodando na porta ' + PORT);
});
