class JogoDaMemoria {
    // se mandar um obj = { tela: 1, idade: 2, etc: 3}
    // vai ignorar todas as propriedades e pegar somemente a propriedade tela 
    constructor({ tela }) {
        this.tela = tela

        // caminhoo do arquivo sempre relativo ao index.html
        this.pokemonsIniciais = [
            { img: './arquivos/bulbasaur.png', name: 'bulbasaur'},
            { img: './arquivos/eevee.png', name: 'eevee'},
            { img: './arquivos/pikachu.png', name: 'pikachu'},
            { img: './arquivos/ponyta.png', name: 'ponyta'},
            { img: './arquivos/snorlax.png', name: 'snorlax'},
            { img: './arquivos/zubat.png', name: 'zubat'},
        ]
    }
    // para usar o this não podemos usar o static
    inicializar() {
        // vai pegar todas as funcoes da classe tela
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.pokemonsIniciais)
        // força a tela a usar o THIS de Jogo da Memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar() {
        const copias = this.pokemonsIniciais
        // duplicar os itens
        .concat(this.pokemonsIniciais)
        // entrar em cada ide e criar um id aleatorio
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5})
        })
        // ordenar aleatoriamente
        .sort(() => Math.random() - 0.5)
        
        this.tela.atualizarImagens(copias)
    }

    jogar() {
        this.embaralhar()
    }
}