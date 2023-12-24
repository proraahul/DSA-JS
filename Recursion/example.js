function Factorial(n){
    if(n==0 || n==1){
        return n;
    }

    return Factorial(n-1) + Factorial(n-2);
}


const result = Factorial(5);
console.log(result);