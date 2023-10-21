function Factorial(num){

    if(num >1){
        return num *  Factorial(num -1);
    }
return num;

}

console.log(Factorial(5));