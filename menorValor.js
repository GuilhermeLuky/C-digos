const livros = require('./listaLivros')

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial;
// let maisCaro = 0;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco)
            maisBarato = atual
        } 
        return maisBarato;
}
// for (let atual =0; atual < livros.length; atual++){
//     if (livros[atual].preco > livros[maisCaro].preco)
//         maisCaro = atual
// }

module.exports = menorValor;