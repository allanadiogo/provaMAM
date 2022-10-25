function array (numero){
    let x= Infinity;
    for(item of numero){

        if ( x > item){
            x = item;
        }
    }
    return x;
}
console.log(array([5,13,1,3]))