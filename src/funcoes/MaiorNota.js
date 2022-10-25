function array (numero){
    let x= 0;
    for(item of numero){

        if ( x < item){
            x = item;
        }
    }
    return x;
}
console.log(array ([5,13,8,3]))