// meses começam do zero 0!!!

const dataAniversario = new Date(2020, 3, 7)
//console.log(dataAniversario)

const primeiraDataDoJS = new Date(0)
//console.log(primeiraDataDoJS.getTime())

const hoje = new Date()
//console.log(hoje.toString())
//console.log(hoje.toLocaleDateString())

// formato global recomendado!!!
//console.log(hoje.toISOString())

const dia = hoje.getDate()
hoje.setDate(dia + 10) // +10 dias depois de hj!!!
hoje.setHours(15, 20, 0)

console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getUTCFullYear()}
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}
`)

console.log(
    new Date(2020, 3, 7) > new Date(2020, 3, 6)
)