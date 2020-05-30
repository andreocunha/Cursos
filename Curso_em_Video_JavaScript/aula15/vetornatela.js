var valores = [ 5, 2, 6, 9, 1]

/*
for(let pos=0; pos< valores.length; pos++){
    console.log(`Posição ${pos}: Valor = ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`Posição ${pos}: Valor = ${valores[pos]}`)
}