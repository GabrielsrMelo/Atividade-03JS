function calculoFatorial(dados1) {
    let resultado = 1
    let contador = dados1
    
    while (contador > 1) {
        resultado *= contador
        contador--
    }
    
    console.log(`O Fatorial de ${dados1} é ${resultado}`)
    
}


module.exports ={
    calculoFatorial
}