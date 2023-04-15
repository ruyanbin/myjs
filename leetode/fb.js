function a(n){
    console.log(typeof n);
    console.log(n);

    if(typeof n !== 'number'){
        throw 'n is not number'
    }
    if(n === 0 || n===1){
        return 1
    }
    return a(n-1)+a(n)
}
console.log(a(3));