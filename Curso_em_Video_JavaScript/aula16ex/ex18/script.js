var valores = []
var txtn = window.document.getElementById('txtn')
var tabela = window.document.getElementById('tabela')
var res = window.document.getElementById('res')

function adcionar(){
    var valor = Number(txtn.value)
    valores[valores.length] = valor
    let item = document.createElement('option')
    item.text += `Valor ${valor} adcionado.`
    item.value = `tab${txtn}`
    tabela.appendChild(item)
    
}

function finalizar(){
    for(var i=0; i<valores.length; i++){
        res.innerHTML += `${valores[i]}, `
    }
    
}