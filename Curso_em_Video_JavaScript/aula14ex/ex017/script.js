function gerartabuada(){
    var txtnum = window.document.getElementById('txtnum')

    if(txtnum.value.length == 0){
        window.alert('Por favor, digite um número!')
    }
    else{
        var num = Number(txtnum.value)
        var tabuada = window.document.getElementById('tabuada')
        tabuada.innerHTML= ''
        for(var i =1 ; i<=10; i++){
            let item = document.createElement('option')
            item.text += `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            tabuada.appendChild(item)
        }
    }    
}

