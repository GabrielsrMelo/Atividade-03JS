/*************************************************************** 
 * Objetivo: Arquivo resposável pelos calculos de IMC de uma pessoa.
 * Data: 27/02/2026
 * Autor: Gabriel Sousa        
 * Versão: 1.0
****************************************************************/

//Função responsável pela calculo de IMC
function calcularImc(valor1, valor2){
    let peso = Number(valor1)
    let altura = Number(valor2)

    let calculo = peso / (altura * altura)
    
    if(calculo < 18.5){
        console.log(`O resultado é ${calculo.toFixed(2)}! Você está abaixo do peso.`)
    }else if(calculo >= 18.5 && calculo < 25){
        console.log(`O resultado é ${calculo.toFixed(2)}! Você está com o peso ideal.`)
    }else if(calculo >= 25.0 && calculo < 30){
        console.log(`O resultado é ${calculo.toFixed(2)}! Você está Acima do peso (Sobrepeso)`)
    }else if(calculo >= 30.0 && calculo < 35){
        console.log(`O resultado é ${calculo.toFixed(2)}! Você está com Obsidade I`)
    }else if (calculo >= 35 && calculo < 40){
        console.log(`O resultado é ${calculo.toFixed(2)}! Você está com Obsidade II`)
    }else if (calculo >= 40){
        console.log(`O resultado é ${calculo.toFixed(2)}! Você está com Obsidade III`)
    }else{
        return false
    }

}
module.exports={
    calcularImc
}