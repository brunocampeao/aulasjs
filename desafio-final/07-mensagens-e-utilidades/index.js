function onLoad() {
    const dependencias = {
        tela: Tela, // a classe tela é global
        util: Util
    }
    // inicializa mos o jogo da memoria
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()
}
window.onload = onLoad