function simpleInt(principle,rate,time){
    let finalAmt = principle + principle*time*rate;
    return finalAmt;
}

// return finalAmount based on the simple interest formula provided principal amount, rate of interest per year, and time on yearly basis.

console.log(simpleInt(20000, 1, 2));
console.log(simpleInt(150000, 25, 1));