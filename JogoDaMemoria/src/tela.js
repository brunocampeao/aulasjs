// metodos estáticos não pode acessar o `this`
// por isso, não vamos colocar o util no construtor
const util = Util

const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const ID_CARREGANDO = "carregando"
const ID_CONTADOR = "contador"
const ID_BTN_MOSTRAR_TUDO = "mostrarTudo"
const MENSAGENS = {
    sucesso: {
        texto: 'ACERTOU MIZERAVI!!!',
        classe: 'alert-warning'
    },
    erro: {
        texto: 'ERROU!!!',
        classe: 'alert-danger'
    }
}
class Tela {
    static obterCodigoHtml(item) {
        return `
        <div class="col-md-3 card-container">
          <div class="flip-card-inner">
            <div class="item-card card-back base-bg ${item.nome}-bg" data-name="${item.nome}">
            </div>
            <div class="item-card card-front base-bg padrao-bg">
            </div>
          </div>
        </div>
        `
    }
    static configurarBotaoVerificarSelecao(funcaoOnClick) {
        window.verificarSelecao = funcaoOnClick
    }
    static alterarConteudoHTML(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }
    static gerarStringHTMLPelaImagem(itens) {
        // para cada item da lista, vai executar a função obterCodigoHtml
        // ao final vai concatenar tudo em uma unica string
        // muda de Array para String
        return itens.map(Tela.obterCodigoHtml).join('')
    }
    static atualizarImagens(itens) {
        const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
        Tela.alterarConteudoHTML(codigoHtml)
    }

    static configurarBotaoJogar(funcaoOnClick) {
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick
    }
    static exibirPokemons(nomeDoPokemon, img) {
        const elementosHtml = document.getElementsByName(nomeDoPokemon)
        // para cada elemento encontrado na tela, vamos alterar a imagem
        // para a imgem icial dele
        // com o forEach, para cada item, dntro dos () setamos o valor 
        // de imagem
        elementosHtml.forEach(item => (item.src = img))
    }
    static async exibirMensagem(sucesso = true ) {
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso) {
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe)
            elemento.innerText = MENSAGENS.sucesso.texto
        }
        else {
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe)
            elemento.innerText = MENSAGENS.erro.texto
        }
        elemento.classList.remove(CLASSE_INVISIVEL)
        await util.timeout(1000)
        elemento.classList.add(CLASSE_INVISIVEL)
    }

    static exibirCarregando(mostrar = true) {
        const carregando = document.getElementById(ID_CARREGANDO)
        if(mostrar) {
            carregando.classList.remove(CLASSE_INVISIVEL)
            return;
        }
        carregando.classList.add(CLASSE_INVISIVEL)
    }
    static iniciarContador() {
        let contarAte = 3
        const elementoContador = document.getElementById(ID_CONTADOR)
        // vamos substituir o texto começando $$contador segundos
        // onde está o $$contador adicionaremos o valor
        const identificadorNoTexto = "$$contador"
        const textoPadrao = `COMEÇANDO EM ${identificadorNoTexto} SEGUNDOS.....`
        // vamos criar uma funcao em linha para atualizar o texto
        // a cada segundo
        const atualizarTexto = () =>
        (elementoContador.innerHTML = textoPadrao.replace(identificadorNoTexto, contarAte--))

        atualizarTexto()
        // a cada segundo vai chamar a função atualizar texto
        // essa função vai substituir o $$contador pelo `contarAte` diminuindo o valor
        // retornamos o idDoIntervalo para parar ele mais tarde 
        const idDoIntervalo = setInterval(atualizarTexto, 1000)
        return idDoIntervalo
    }

        static limparContador(idDoIntervalo) {
            clearInterval(idDoIntervalo)
            // deixamos sem texto
            document.getElementById(ID_CONTADOR).innerHTML = ""
        }
        static configurarBotaoMostrarTudo(funcaoOnClick) {
            var showAllBack = function() {
              var offCards = document.querySelectorAll("div.flip-card-inner:not(.rotate-card):not(.fix-card)");
              offCards.forEach(item => item.classList.add("rotate-card"));
              window.setTimeout(() => { offCards.forEach(item => item.classList.remove("rotate-card")); }, 900);
            }
            const btnMostrarTudo = document.getElementById(ID_BTN_MOSTRAR_TUDO);
            btnMostrarTudo.onclick = showAllBack;
        }
}
