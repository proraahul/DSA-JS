// library code for the payment gateway we don't have access to

const handleSuccessfulPayment = (cb) => {
        for(let i=0; i<3; i++){
            cb(paymentInfo);
        }
};

// our code
const callback = (paymentInfo) => {
    // call backend to confirm payment
    // navigate to the payment successful screen
};

handleSuccessfulPayment(callback);