function nomeDaFuncao(parametro1) {
    //bloco de codigo
}

function queDiaEHoje() {
    const data = new Date()
    console.log(`Hoje é dia: ${data.getDate()}`)
}
queDiaEHoje()

function soma(valor1, valor2) {
    console.log(`A soma de ${valor1} + ${valor2} é:`, valor1 + valor2)
}
soma(575, 856)
soma(98, 137)

// - Funções podem retornar valores
function soma(valor1, valor2) {
    return valor1 + valor2
}
const minhaIdade = 13
const idadeDoAmigo = 14
const resultado = soma(minhaIdade, idadeDoAmigo)
console.log('resultado', resultado)

function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2
    return resultado
}
console.log(`O resultado da multiplicação é:`, multiplicar( 13, 14))

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const funcionario1 = {
    nome: 'Claudisney Da Silva',
    desconto: 0.2,
    salarioBruto: 1850,
    salarioLiquido: 0   
}

const funcionario2 = {
    nome: 'Joelma Dos Santos',
    desconto: 0.15,
    salarioBruto: 1850,
    salarioLiquido: 0
}

//const descontoFuncionario1 = 
    //funcionario1.salarioBruto - (funcionario1.desconto * funcionario1.salarioBruto)

//const descontoFuncionario2 = 
    //funcionario2.salarioBruto - (funcionario2.desconto * funcionario2.salarioBruto)

//console.log(
    //`Funcionario1: ${descontoFuncionario1}
    //Funcionario2: ${descontoFuncionario2}`
//)

function calcularDesconto(salarioBruto, desconto) {
    return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto
)

funcionario2.salarioLiquido = calcularDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto
)

console.log(
    `
    
    Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido}
    Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido}
    `
)
