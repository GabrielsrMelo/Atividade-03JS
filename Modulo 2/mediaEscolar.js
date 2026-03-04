/******************************************************************************************
 * objetivo : calcular média Escolar 
 * Data:      04/03/2026
 * Autor:     Gabriel Sousa
 * Versão:    1.0
*******************************************************************************************/
// Importe da biblioteca
const readline = require('readline')

// Cria objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})  

function calcularMedia(valor1, valor2, valor3, valor4){
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)
    let statusAluno

    let media = (nota1 + nota2 + nota3 + nota4 ) / 4

    if(media < 50){
        return statusAluno = 'Reprovado'
    }else if(media >= 50 && media <= 69){
        console.log("A média ficou entre 50 e 69.");
        console.log("O aluno deverá realizar exame.");
        entradaDeDados.question('Informe a nota obtida no exame (0 a 100):', function(exame){
            let notaExame = parseFloat(exame.replace(',', '.'))

            let calculo = (notaExame + media) / 2

            if(calculo >= 60){
                return statusAluno = 'Aprovado no exame'

            }else{
                return statusAluno = 'Reprovado no exame'
            }
        })

    }else if(media >= 70){
        return statusAluno = 'Aprovado'
    }else {
        console.log('Erro')
        return false
    }

    
}
module.exports={
    calcularMedia
}