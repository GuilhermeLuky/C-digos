const clientes = [
    {
        nome: "Andre",
        idade: 36,
        cpf: "1254365266",
        fones: ["5591235498", "5521988743124"],
        dependentes: [
            {
                nome: "Sara",
                parentesco: "Filha",
                dataNasc: "20/03/2011"},
            {
                nome : "Samia",
                parentesco: "Filha",
                dataNasc: "04/01/2014"
            }],
    },
    {
        nome: "Juliana",
        cpf: "56767867867",
        dependentes: [{
            nome: "Sophia",
            parentesco: "Filha",
            dataNasc: "30/08/2020"
        }]
    }
]

const listaDependentes =
 [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)