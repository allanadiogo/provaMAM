function array (numero){
    let x=0;
    for(item of numero){
        x = x + item;
    }
    return x / numero.length;
}
console.log(array([5,13,1,3]))