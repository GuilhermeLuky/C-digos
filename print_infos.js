const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12543652266",
    email: "andre@email.com",
}

console.log (`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)


//substring consegue acessar os caracteres de uma string separadamente
console.log(cliente.cpf.substring(0,3))