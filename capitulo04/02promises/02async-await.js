const readFile = require('readline')
const terminal = readFile.createInterface({
    input: process.stdin,
    output: process.stdout
})

function questionAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, msg => {
            !!msg ? resolve(msg) : reject(new Error('O CAMPO NÃO PODE SER VAZIO!!!'))
        })
    })
}

async function main() {
    try {
        const nome = await questionAsync('QUAL É O SEU NOME??')
        const telefone = await questionAsync('QUAL É O SEU TELEFONE??')
        console.log(`Nome: ${nome},\n Telefone: ${telefone}`)
    } catch (error) {
        console.log('DEU RUIMM', error.stack)
    }
    finally {
        terminal.close()
    }
}
main()
