// Importe da biblioteca
const readline = require('readline')

// Cria objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})  

function obterDados(){
    entradaDeDados.question('Digite a tabuada incial (2 a 100):', function(tab1){
        let tabuadaInicial = tab1

        entradaDeDados.question('Digite a tabuada final (2 a 100):', function(tab2){
            let tabuadaFinal = tab2 

            entradaDeDados.question('🚀 Vamos começar a tabuada por qual número?(1 a 50) :', function(num1){
                let numInicial = num1

                entradaDeDados.question('🏁 E onde devemos parar a contagem?(1 a 50) :', function(num2){
                    let numFinal = num2

                    let tratamentos = require('./tratarDados')
                    let validar = tratamentos.validarDadosTabuada(tabuadaInicial, tabuadaFinal, numInicial, numFinal)

                    let calculoTab = require('./calculo')
                    let validar2 = calculoTab.solicitarTabuada(tabuadaInicial, tabuadaFinal, numInicial, numFinal)
                })
            })
        })
    })


}
obterDados()