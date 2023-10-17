function factorial(n){

    if(n<0){
        return 'Factorial of Negitive number is not possible';
    }
    else if(n===1 || n===0){
        return 1;
    }

    return n * factorial(n-1);
}

console.log(factorial(-2));