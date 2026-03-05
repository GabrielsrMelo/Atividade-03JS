function validarDadosTabuada(dados1, dados2, dados3, dados4) {
    let tabuadaInicial = Number(dados1)
    let tabuadaFinal = Number(dados2)
    let numInicial = Number(dados3)
    let numFinal = Number(dados4)

    if(tabuadaInicial == '' || tabuadaFinal == '' || numInicial == '' || numFinal == ''){
        console.log('Erro: Preencher todos os campos acima!')
    }else if(isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(numInicial) || isNaN(numFinal)){
        console.log('Erro: Digite apenas números nos campos acima!')
    }else if(tabuadaInicial < 2 && tabuadaInicial > 100 || tabuadaFinal < 2 && tabuadaFinal > 100){
        console.log('Erro: O número da tabuada deve estar entre 2 e 100.')
    }else if(numInicial < 1 && numInicial > 50 || numFinal < 1 && numFinal > 50){
        console.log('Erro: O multiplicador final deve ser um número entre 1 e 50.')
    }else{
        console.log('Deu certo')
    }

}

module.exports ={
    validarDadosTabuada
}