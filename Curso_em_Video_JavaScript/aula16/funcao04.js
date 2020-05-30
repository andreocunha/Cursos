function fatorial(n){
    let res = 1
    if(n == 0){
        return 1
    }
    else{
        for(n; n > 1; n--){
            res *= n
        }
        return res
    }
}

console.log(fatorial(0))