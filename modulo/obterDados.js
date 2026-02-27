/*************************************************************** 
 * Objetivo: Arquivo resposável pelos dados obtidos para realizar o calculo do IMC.
 * Data: 27/02/2026
 * Autor: Gabriel Sousa        
 * Versão: 1.0
****************************************************************/

const readline = require('readline')

// Cria objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function obterDados(dados1, dados2) {

    console.log('---------------------- CALCULADORA DE IMC ----------------------')

    entradaDeDados.question('Digite o seu Peso: ', function (dados1) {
        let peso = parseFloat(dados1.replace(',', '.'))

        entradaDeDados.question('Digite sua altura: ', function (dados2) {
            let altura = parseFloat(dados2.replace(',', '.'))

            let imc = require('./imc')
            let validar = imc.calcularImc(peso, altura)

            if (isNaN(peso) || isNaN(altura)) {
                console.log('ERRO: Digite apenas números!')
                obterDados
            }

        })
    })
}
module.exports={
    obterDados
}