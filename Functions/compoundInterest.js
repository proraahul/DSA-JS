

function compoundInt(principle, rate, time, n){
    // n as the number of times that interest is compounded per unit time.
        let interest = principle * (Math.pow((1+( rate/n)), (n * time)));
        return principle + interest;
}

console.log(compoundInt(20000,5,2,2));