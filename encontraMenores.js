const listaLivros = require ("./listaLivros3")

function encontraMenores(pivo, listaLivros3){
    let menores = 0

    for(let atual = 0; atual < arraw.length; atual++){
        let produtoAtual = listaLivros3[atual]
        if (produtoAtual.preco < pivo.preco){
            menores++
        }
    }

    trocaLugar(listaLivros3, listaLivros3.indexOf(pivo), menores)
    return listaLivros3
}

function trocaLugar(array, de, para){
    const elem1 = array[de]
    const elem2 = array[para]

    array[para] = elem1
    array[de] = elem2
}

function divideNoPivo(array){
    let pivo = array[Math.floor(array.length /2)];
    encontraMenores(pivo,array);
    let valoresMenores = 0;

    for(let analisando = 0; analisando < array.length; analisando++){
        let atual = array[analisando];
        if(atual.preco <= pivo.preco && atual !== pivo){
            trocaLugar(array, analisando, valoresMenores)
            valoresMenores++
        }
    }

    return array;
}

// console.log(encontraMenores(listaLivros[2], listaLivros))

module.exports = trocaLugar;