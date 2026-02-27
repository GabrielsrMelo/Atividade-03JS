/*************************************************************** 
 * Objetivo: Arquivo resposável pelos calculos de IMC de uma pessoa.
 * Data: 27/02/2026
 * Autor: Gabriel Sousa        
 * Versão: 1.0
****************************************************************/

//Função responsável pela calculo de IMC
function calcularImc(valor1, valor2){
    const peso = Number(valor1)
    const altura = Number(valor2)

    const calculo = peso / (altura * altura)
    return calculo

}

module.exports={
    calcularImc
}