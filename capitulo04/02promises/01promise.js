const readFile = require('readline')
const terminal = readFile.createInterface({
    input: process.stdin,
    output: process.stdout
})

//terminal.question('QUAL É O SEU NOME?\n', nome => {
    //terminal.question('QUAL É O SEU TELEFONE?', telefone => {
        //console.log(
            //`
            //Nome: ${nome},
            //Telefone: ${telefone}
            //`
        //)
        //terminal.close()
    //})
//})

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}
let nome = ""
let telefone = ""
Promise.resolve()
        .then(() => questionAsync('QUAL É O SEU NOME?'))
        .then(respostaNome => {
            if(!respostaNome) throw new Error('CAMPO VAZIOO')
            nome = respostaNome
        })
        .then(() => questionAsync('QUAL É O SEU TELEFONE?'))
        .then(respostTelefone => {
            if(!respostTelefone) throw new Error('CAMPO VAZIOO')            
            telefone = respostTelefone
        })
        .then(() => {
            console.log(`Nome: ${nome},\n Telefone: ${telefone}`)
        })
        .catch(error => {
            console.error('DEU RUIMMM', error.stack)
        })
        .finally(() => terminal.close())