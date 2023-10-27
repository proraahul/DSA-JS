const handlePayment = (callback) => {

};

const paymentInfo = new Promise ((resolve, reject) => {
    handlePayment(resolve);
});

const timeoutPromise = (delay) => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Time out Error');
        }, delay)
    });
}

    Promise.race([paymentInfo, timeoutPromise(3000)]).then(
        (value) => {
            console.log('resolved with', value);
        },
        (error) => {
            console.log('The error is', error)
        }
    );

    // it can be seen that here made use of the higher abstraction called Promise.race() to cancel the payment in case there is no response within 3 seconds