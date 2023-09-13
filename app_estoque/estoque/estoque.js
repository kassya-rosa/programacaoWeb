let produtos = Array();

function criarProduto(id, nome, qtde){
    let p = {
        id: id,
        nome: nome,
        qtde: qtde
    }
    return p;
}

function adicionarProduto(p){
    produtos.push(p);
}

function listarProdutos(){
    return produtos;
}

function editarProduto(id, qtdeAtual){
    let pEditado;
    produtos.forEach(p => {
        if (p.id == id){
            p.qtde = qtdeAtual;
        }
        pEditado = p;
    })
    return pEditado;
}

function removerProduto(id){
    produtos = produtos.filter((p) =>{
        return p.id != id
    })
    return{};
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    editarProduto,
    removerProduto
}