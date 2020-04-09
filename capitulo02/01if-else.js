let frutaExistenteNoMercado = false
let temCPUSuficiente = true

//
// obter valores do terminal
const args = process.argv
const saldo = args[args.length -1]
//console.log('args', args)
//console.log('saldo', saldo)

if(isNaN(saldo)) {
    console.log('<valor inválido>')
    return;
}

let tipoCliente = "premium"
if(saldo < 2000) {
    tipoCliente = "basic"
}
else if (saldo >= 2500 && saldo < 5000) {
    tipoCliente = "gold"
}
else {
    tipoCliente = null
}

// null, undefined, vazio, 0 === FALSE
if(!tipoCliente) {
    tipoCliente = "indefinido"
}

console.log('tipoDoCliente', tipoCliente)

const operadorOU = 1 > 2 || 2 > 1
const operadorE = 1 === 1 && 2 !== 3
const operadorNOT = !(1==1)

const idade = 18
const resultado = idade >= 18 ?
                        "pode dirigir!!!":
                        "não pode dirigir!!!"
console.log('resultado', resultado)
