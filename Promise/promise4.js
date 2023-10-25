const myPromise = new Promise(function (resolve,reject){
    reject(Promise.resolve('Test resolve'));
});

myPromise.then(
    (value) => {
        console.log('promise fulfiled with value', value);
    },
    (error) => {
        console.log('Promise rejected and the error is', error)
    }
);