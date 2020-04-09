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
        this.iconePadrao = './arquivos/padrão 2.png'
        this.pokemonsEscondidos = []
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
        // vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderPokemons(copias)
        }, 1000);

    }
    esconderPokemons(pokemons) {
        // vamos trocar a imagem de todos o pokemons existentes pelo padrão
        // como fizemos no construtor, vamos exttrair somente o necessario
        // usando a sintaxe ({ chave: 1 }) estamos falando que vamos retornar
        // o que tiver dentro dos parenteses
        // quando não usamos : (ex do id), o JS entende que o nome
        // é o mesmo valor. Ex. id: id, vira id
        const pokemonsOcultos = pokemons.map(( { nome, id}) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        // atualizamos a tela com os pokemons ocultos
        this.tela.atualizarImagens(pokemonsOcultos)
        // guardamos os pokemons para trabalhar com ele depois
        this.pokemonsOcultos = pokemonsOcultos
    }
    jogar() {
        this.embaralhar()
    }
}