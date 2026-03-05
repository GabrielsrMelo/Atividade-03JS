const { obterDados } = require("./obterDadosMedia")

function validarDadosMedia(dados1, dados2, dados3, dados4, dados5, dados6, dados7, dados8, dados9){
    let nome = dados1
    let sexo1 = dados2
    let nomeProfessor = dados3
    let sexo2 = dados4
    let materia = dados5
    let nota1 = Number(dados6)
    let nota2 = Number(dados7)
    let nota3 = Number(dados8)
    let nota4 = Number(dados9)
    let validarSeAl
    let validaSeProf

    if(nome == '' || sexo1 == '' || nomeProfessor == '' || sexo2 == '' || materia == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4== '' ){
        console.log('Erro: Preencher todos os campos acima!')

    }else if (isNaN(nota1) ||  isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        console.log('Erro: Apenas números nos campos de notas!')

    }else if (nota1 < 0 && nota1 > 100 || nota2 < 0 && nota2 > 100 || nota3 < 0 && nota3 > 100 || nota4 < 0 && nota4 > 100){
        console.log('Erro: As notas devem estar obrigatoriamente entre 0 e 100. Verifique os valores digitados.')

    }else if((sexo1 !== 'F' &&  sexo1 !== 'M' ) || (sexo2 !== 'F' && sexo2 !== 'M')){
        console.log('Erro: Digite apenas M (masculino) ou F (feminino) no campo de sexo. ')
    }else{
     return true
     
    }

 

}


module.exports ={
    validarDadosMedia
}