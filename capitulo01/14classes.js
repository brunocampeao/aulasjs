class Heroi {
    atacar(){
        console.log(`atacou!!!`)
    }
    defender(){
        console.log(`defendeu!!!`)
    }
}

const heroi = new Heroi 
heroi.atacar()
heroi.defender()

// usando construtor!

class Heroi2 {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    atacar() {
        console.log(
            `O ${this.nome} atacou!!!`
        )
    }
}
const heroi2 = new Heroi2(
    `Batman`, 30
)
heroi2.atacar()

class Heroi3 {
    static obterAnoNascimento(idade) {
        return 2020 - idade
    }
}
const anoDeNascimento = Heroi3.obterAnoNascimento(30)
console.log(
    `O ano de nascimento do heroi é: ${anoDeNascimento}`
)
