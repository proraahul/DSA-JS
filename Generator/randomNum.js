const getRandomNumber = (time) => {
    const numberPromise = new Promise((resolve) => {
        setTimeout(() => {
           resolve(Math.random()); 
        }, time);
    })
    return numberPromise;
}


function* printRandomNumber(){
    let number = yield getRandomNumber(1000);
    console.log('number is ', number);

    number = yield getRandomNumber(2000)
    console.log('number is ', number);

    number = yield getRandomNumber(3000)
    console.log('number is ', number);

    number = yield getRandomNumber(2000)
    console.log('number is ', number);

    number = yield getRandomNumber(1000)
    console.log('number is ', number);

}

printRandomNumber();