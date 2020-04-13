function onLoad() {
    const dependencias = {
        tela: Tela, // a classe tela é global
        util: Util
    }
    // inicializa mos o jogo da memoria
    window.jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()
}
window.onload = onLoad
