function* getFibonacciNumber(){
    let lastToLastNumber = 1;
    yield lastToLastNumber;

    let lastNumber = 1;
    yield lastNumber;

    while(true){
        const newNumber = lastNumber + lastToLastNumber;
        yield newNumber;

        [lastNumber, lastToLastNumber] = [newNumber, lastNumber]
    }
}

const it = getFibonacciNumber();
console.log('Fibonacci number is ', it.next().value);
console.log('Fibonacci number is ', it.next().value);
console.log('Fibonacci number is ', it.next().value);