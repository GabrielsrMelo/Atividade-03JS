const { obterDados } = require("./obterdadosFat")

function tratarDados(dados1){
    let numeroFatorial = Number(dados1)

    if(numeroFatorial <= 1){
        console.log('Erro: Por favor, insira um número inteiro positivo maior que 1.')
        obterDados()
    }else if(isNaN(numeroFatorial)){
        console.log('Erro: Apenas números no campo acima!')
        obterDados()
    }else if (numeroFatorial == '' ){
        console.log('Erro: Preencher todos os campos acima!')
        obterDados()
    }else{
        return true
    }
}

module.exports ={
    tratarDados
}