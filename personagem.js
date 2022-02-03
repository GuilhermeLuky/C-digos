// const fichaGuerreiro = {
//     nome: "Aragorn",
//     classe: "Guerreiro"
// }

// const equipoGuerreiro = {
//     espada: "Andúril",
//     capa: "capa élfica +2"
// }

// const guerreiro = {...fichaGuerreiro, ...equipoGuerreiro}
// console.log(guerreiro)

const mago = {
    nome: "Gandalf",
    classe: "Mago"
}

const guerreiro = {
    nome: "Aragorn",
    classe: "Guerreiro"
}

const ranger = {
    nome: "Legolas",
    classe: "Ranger"
}

const personagens = { mago, guerreiro, ranger};
console.table(personagens)