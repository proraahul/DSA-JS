function printFactor(num, fact){

    if(num/fact < 2){
        console.log(num);
        return;
    }

    if(num%fact == 0){
        console.log(fact);
    }
    
    return printFactor(num, fact+1);
}

function findfactor(num){
    printFactor(num, 1)
}


findfactor(20);