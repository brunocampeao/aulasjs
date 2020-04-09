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
    }
}