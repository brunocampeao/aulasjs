const fs = require('fs')
//fs.readFile('./arquivo1.txt', (error, resposta)=> {
    //if(error) {
        //console.error('DEU RUIM!!!', error.stack)
        //return;
    //}

    //console.log('resposta', resposta.toString())
//})

fs.readFile('./arquivo1.txt', (errorArquivo1, respostaArquivo1)=> {
    if(errorArquivo1) {
        console.error('DEU RUIM NO arquivo1', errorArquivo1)
        return;
    }
    fs.readFile('./arquivo2.txt', (errorArquivo2, respostaArquivo2)=> {
        if(errorArquivo2) {
            console.error('DEU RUIM NO arquivo2', errorArquivo2)
            return;
        }
        fs.readFile('./arquivo3.txt', (errorArquivo3, respostaArquivo3)=> {
            if(errorArquivo3) {
                console.error('DEU RUIM NO arquivo3', errorArquivo3)
                return;
            }

            const conteudo = `${respostaArquivo1}\n${respostaArquivo2}\n${respostaArquivo3}`
            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite)=> {
                console.error('DEU RUIM NA GRAVAÇÃO', errorWrite)
                return;
            })
            console.log('ARQUIVO SALOVO COM SUCESSO!!!')
        })
    })
})