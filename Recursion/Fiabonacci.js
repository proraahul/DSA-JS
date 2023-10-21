function findFibonacci(num){

    if(num < 0){
        return 0;
    }
    if(num < 3){
        return 1;
    }

    return findFibonacci(num-1) + findFibonacci(num-2);

}

console.log(findFibonacci(5));
console.log(findFibonacci(9));