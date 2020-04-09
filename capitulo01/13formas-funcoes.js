function minhaFuncao(parametro1) {
    return `HEY! HEY!`
}

const minhaFuncao2 = function(parametro1) {
    return `HEY! HEY!  ${parametro1}`
}

const minhaFuncao3 = (parametro1) => {
    return `HEY! HEY! ${parametro1}`
} 

const minhaFuncao4 = parametro1 => `HEY! HEY! ${parametro1}`

const obj1 = {
    minhaFuncao: parametro1 => `HEY! HEY! ${parametro1}`
}

obj1.minhaFuncao('test')

const obj2 = {
    minhaFuncao (parametro1) {
        return `HEY! HEY! ${parametro1}`
    }
}

obj2.minhaFuncao( )