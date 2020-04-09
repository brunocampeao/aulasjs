const readLine = require('readline')
const terminal = readLine.createInterface({
    // modo de entrada será via terminal
    input: process.stdin,
    // todod texto de saída será via terminal
    output: process.stdout
})

const textoMenu = `
Olá, seja bem vindo(a) ao sistema de batalhas.
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de Heróis
Digite 3 para acessar o menu de Guerreiros
Digite 0 para acessar sair
`
//console.log('textoMenu', textoMenu)
//const opcao = 1
//switch(opcao) {
    //case 1:
        //console.log('pressionou 1')
        //break;
    //case 2:
        //console.log('pressionou 2')
        //break;
    //default:
        //console.log('oção inválida')
        //break
//}

//terminal.question('Qual é o seu nome?', (msg) => {
    //console.log('Você escreveu', msg)
    //terminal.close()
//})

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1: {
        texto: 'Submenu! Pressione enter para selecionar mais opções...',
        fn: opcao1
    }
}
function opcao1(msg) {
    console.log('Não há mais opções!')
    terminal.close()
}
function menuInicial(msg) {
    //console.log('Acionando menu inicial!', msg)
    const opcao = Number(msg)
    if(isNaN(opcao)) {
        throw new Error('Não é um número', msg)
    }
    switch(opcao) {
        case 0:
            console.log('Saindo...')
            terminal.close()
            break;
        case 1:
            console.log('Menu Inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break;
        default:
            console.log('Opção Inválida')
            terminal.close()
            break 
    }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)
