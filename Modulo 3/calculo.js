function solicitarTabuada(dados1, dados2, dados3, dados4){
    let tabuadaInicial = Number(dados1)
    let tabuadaFinal   = Number(dados2)
    let numInicial     = Number(dados3)
    let numFinal       = Number(dados4)

    while(tabuadaInicial <= tabuadaFinal){

        let aux = numInicial
        console.log('')
        console.log('a tabuada do ['+tabuadaInicial+']')

        while (aux<=tabuadaFinal){

            let resultado = (tabuadaInicial*aux)
            console.log(tabuadaInicial+'x'+aux+'='+resultado)

            aux ++
        }

        tabuadaInicial++
    }

}

module.exports={
    solicitarTabuada
}