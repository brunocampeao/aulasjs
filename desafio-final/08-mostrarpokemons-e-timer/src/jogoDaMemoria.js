class JogoDaMemoria {
    // se mandar um obj = { tela: 1, idade: 2, etc: 3}
    // vai ignorar todas as propriedades e pegar somemente a propriedade tela 
    constructor({ tela, util }) {
        this.tela = tela
        this.util = util
        // caminhoo do arquivo sempre relativo ao index.html
        this.pokemonsIniciais = [
            { img: './arquivos/bulbasaur.png', nome: 'bulbasaur'},
            { img: './arquivos/eevee.png', nome: 'eevee'},
            { img: './arquivos/pikachu.png', nome: 'pikachu'},
            { img: './arquivos/ponyta.png', nome: 'ponyta'},
            { img: './arquivos/snorlax.png', nome: 'snorlax'},
            { img: './arquivos/zubat.png', nome: 'zubat'},
        ]
        this.iconePadrao = './arquivos/padrão 2.png'
        this.pokemonsEscondidos = []
        this.pokemonsSelecionados = []
    }
    // para usar o this não podemos usar o static
    inicializar() {
        // vai pegar todas as funcoes da classe tela
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.pokemonsIniciais)
        // força a tela a usar o THIS de Jogo da Memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarPokemonsEscondidos.bind(this))
    }
    async embaralhar() {
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
        this.tela.exibirCarregando()

        const idDoIntervalo = this.tela.iniciarContador()

        // vamos esperar 3 segundo para atualizar a tela
        await this.util.timeout(3000)
        this.tela.limparContador(idDoIntervalo)
        this.esconderPokemons(copias)
        this.tela.exibirCarregando(false)
        
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
        this.pokemonsEscondidos = pokemonsOcultos
    }
    exibirPokemons(nomeDoPokemon) {
        // vamos procurar esse pokemon pelo nome em nossos pokemons iniciais
        // vamos obter somente a imagem dele
        const { img } = this.pokemonsIniciais.find(({ nome }) => nomeDoPokemon === nome)
        // vamos criar a funcao na tela, para exibir somente o heroi selecionado
        this.tela.exibirPokemons(nomeDoPokemon, img)
    }
    verificarSelecao(id, nome) {
        const item = { id, nome }
        // vamos verificar a quantidade de pokemons selecionados
        // e tomar ação se escolheu certo ou errado
        const pokemonsSelecionados = this.pokemonsSelecionados.length
        switch(pokemonsSelecionados) {
            case 0:
                // adiciona a escolha na lista, esperando pela próxima 
                // clicada
                this.pokemonsSelecionados.push(item)
                break;
            case 1:
                // se a quantidade de escolhidos for 1, significa 
                // que o usuário só pode escolher mais um
                // vamos obter o primeiro item da lista
                const [ opcao1 ] = this.pokemonsSelecionados
                // zerar itens para não selecionar mais de dois
                this.pokemonsSelecionados = []
                // conferimos se os nome e ids batem conforme
                // o esperado
                if(opcao1.nome === item.nome &&
                // aqui verificamos se são dois ids diferentes para 
                // o usuario não clicar duas vezes no mesmo 
                    opcao1.id !== item.id
                ) {
                    this.exibirPokemons(item.nome)
                    // como o padrão é true, não precisa passar nada
                    this.tela.exibirMensagem()
                    // para a execução
                    return;
                }

                this.tela.exibirMensagem(false)
                // fim do case
                break;
        }
    }
    mostrarPokemonsEscondidos() {
        // vamos pegar todos os pokemons da tela e colocar seu 
        // respectivo valor correto
        const pokemonsEscondidos = this.pokemonsEscondidos
        for(const pokemon of pokemonsEscondidos) {
            const { img } = this.pokemonsIniciais.find(item => item.nome === pokemon.nome)
            pokemon.img = img
        }
        this.tela.atualizarImagens(pokemonsEscondidos)
    }
    jogar() {
        this.embaralhar()
    }
}