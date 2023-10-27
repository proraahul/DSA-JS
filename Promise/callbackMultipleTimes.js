// calling the callback multiple times:

const myPromise = new Promise (function(resolve, reject){
    resolve(Promise.resolve('Test resolve'));
    resolve(Promise.resolve('Test resolve 2'));
    resolve(Promise.resolve('Test resolve 3'));
});


myPromise.then(
    (value) => {
        console.log('promise fulfilled with value', value);
    },
    (error) => {
        console.log('Promise rejected and the error is', error);
    }
);