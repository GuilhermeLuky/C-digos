// const pessoa = {
//     nome: "Ana",
//     email: "a@email",
//     imprimeNome: function(){
//         console.log(`${pessoa.nome}`)
//     }
// }

// pessoa.imprimeNome()

// const pessoa = {
//     nome: "Ana",
//     email: "a@email.com",
//     imprimeNome: function(){
//         console.log(`${this.nome}`)
//     }
// }

// pessoa.imprimeNome()

// function imprimeNomeEmail(){
//     console.log(`nome: ${this.nome}, email: ${this.email}`)
// }

// const pessoa1 = {
//     nome: "Ana",
//     email: "a@email.com",
//     imprimeInfo: imprimeNomeEmail
// }

// const pessoa2 = {
//     nome: "Paula",
//     email: "p@email.com",
//     imprimeInfo: imprimeNomeEmail
// }

// pessoa1.imprimeInfo()
// pessoa2.imprimeInfo()

// function Pessoa(nome, email){
//     this.nome = nome
//     this.email = email
//     this.imprimeNomeEmail = function(){
//         console.log(`nome: ${this.nome}, email: ${this.email}`)
//     }
// }

// const pessoa1 = new Pessoa("Ana", "a@email.com")
// const pessoa2 = new Pessoa("Paula", "p@email.com")

// pessoa1.imprimeNomeEmail()
// pessoa2.imprimeNomeEmail()

// function imprimeNomeEmail(tipoCliente){
//     console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
// }

// const cliente1 = {
//     nome: "Carlos",
//     email: "c@email.com"
// }

// const cliente2 = {
//     nome: "Fred",
//     email: "f@email.com"
// }

// imprimeNomeEmail.call(cliente1, "cliente especial")
// imprimeNomeEmail.call(cliente2, "cliente estudante")

// function imprimeNomeEmail(tipoCliente, agencia){
//     console.log(`
//     ${tipoCliente} da agência ${agencia}: - nome: ${this.nome}, email: ${this.email}`)
// }

// const cliente1 = {
//     nome: "Carlos",
//     email: "c@email"
// }

// const cliente2 = {
//     nome: "Fred",
//     email: "f@email.com"
// }

// const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
// const clienteEstudante = ["cliente estudante", "Fortaleza"]

// imprimeNomeEmail.apply(cliente1, clienteEspecial)
// imprimeNomeEmail.apply(cliente2, clienteEstudante)

const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
        return `a personagem é ${this.nome}`
    }
}

const personagemGenerico = personagem.apresentar
// console.log(personagemGenerico())

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())