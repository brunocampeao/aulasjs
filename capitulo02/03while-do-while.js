// enqunto não mudar, não para!
let termoDeParada = true
let contador = 0
while(termoDeParada) {
    termoDeParada = contador < 10
    if(contador % 2 === 0) {
        console.log('Número Par', contador)
    }
    contador += 1
    // contador = contador + 1
}

// roda a primeira vez e testa a variável depois!
do  {
    console.log('Só uma vez! Pois termoDeParada é', termoDeParada)
} while(termoDeParada)

while(true) {
    // não vai executar
    console.log('Nem vai executar!')
}