function contar(){
    var res = document.getElementById('res')
    res.innerHTML = ``

    var txtinicio = document.getElementById('txtinicio')
    var txtfim = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')

    if(txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length ==0){
        res.innerHTML = `Impossível contar!`
    } else {
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)

        if(passo <= 0){
            passo = 1
            window.alert('Passo inválido! Considerando o PASSO 1')
        }
        res.innerHTML = `Contando: <br>` 

        if(inicio < fim){ //Contagem crescente
            for(inicio; inicio<= fim; inicio += passo){
                res.innerHTML += `${inicio} \u{1F449} `
            }
        }
        else{ //contagem regressiva
            for(inicio; inicio>= fim; inicio -= passo){
                res.innerHTML += `${inicio} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}



