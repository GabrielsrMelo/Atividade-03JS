// Importe da biblioteca
const readline = require('readline')

// Cria objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function obterDados() {

    // Coleta os dados solicitados 
    entradaDeDados.question('Digite o nome do aluno(a): ', function (nome) {
        let nomeAluno = nome

        entradaDeDados.question('Digite o sexo do aluno(a) [F/M]:', function (sexo1) {
            let sexoAluno = sexo1.toUpperCase()

            entradaDeDados.question('Digite o nome do Professor(a) :', function (nome2) {
                let nomeProfessor = nome2

                entradaDeDados.question('Digite o sexo do Professor(a) [F/M]:', function (sexo2) {
                    let sexoProfessor = sexo2.toUpperCase()

                    entradaDeDados.question('Digite o nome da disciplina:', function (materia) {
                        let disciplina = materia

                        entradaDeDados.question('Digite a primeira nota:', function (nota1) {
                            let primeiraNota = parseFloat(nota1.replace(',', '.'))

                            entradaDeDados.question('Digite a segunda nota:', function (nota2) {
                                let segundaNota = parseFloat(nota2.replace(',', '.'))

                                entradaDeDados.question('Digite a terceira nota:', function (nota3) {
                                    let terceiraNota = parseFloat(nota3.replace(',', '.'))

                                    entradaDeDados.question('Digite a quarta nota:', function (nota4) {
                                        let quartaNota = parseFloat(nota4.replace(',', '.'))

                                        // Importa o módulo responsável pelos tratamentos
                                        let tratamentos = require('./tratarDados')
                                        // Executa a validação dos dados informados
                                        let validar = tratamentos.validarDadosMedia
                                            (nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, disciplina, nota1, nota2, nota3, nota4)

                                        //Importa o módulo responsável pelo calculo
                                        let calculo = require('./mediaEscolar')
                                        //Executa a o calculo dos dados informados
                                        let validar2 = calculo.calcularMedia(nota1, nota2, nota3, nota4)

                                        console.log(validar2)

                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

}

obterDados()


module.exports = {
    obterDados
}