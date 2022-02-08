const listaLivros = require("./listaLivros3");
const trocaLugar = require("./encontraMenores");

function quickSort(listaLivros3, esquerda, direita){

    if(listaLivros3.length > 1){
        let indiceAtual = particiona(listaLivros3, esquerda, direita);
        if(esquerda < indiceAtual - 1){
            quicSort(listaLivros3, esquerda, indiceAtual - 1)
        }
        if(indiceAtual < direita){
            quickSort(listaLivros3, indiceAtual, direita)
        }
    }
    return listaLivros3;
}

function particiona(array, esquerda, direita){
    let pivo = array[Math.floor((esquerda + direita) / 2)]  
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita){
        while(array[atualEsquerda].preco < pivo.preco){
            atualEsquerda++
        }
        while(array[atualDireita].preco > pivo.preco){
            atualDireita --
        }

        if(atualEsquerda <=atualDireita){
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;

        }
    }
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))