// Importe da biblioteca
const readline = require('readline')

// Cria objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})  

function obterDados(){
    entradaDeDados.question('Digite o número desejado:', function(fatorial){
        let numeroFatorial = fatorial

        let tratamentos = require('./tratarDadosFat') 
        let validar = tratamentos.tratarDados(numeroFatorial)

        let calculo = require('./calculo')
        let validar2 = calculo.calculoFatorial(numeroFatorial)
   })

    
        
    }

obterDados()
module.exports ={
    obterDados
}