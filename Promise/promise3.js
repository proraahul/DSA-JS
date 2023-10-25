const myPromise = new Promise(function (resolve, reject){
    resolve(Promise.reject('Test'));
});

myPromise.then(
    () => {
        console.log('Promise fulfilled');
        // does not run
    },
    (error) => {
        console.log('Promise rejected and the error is', error);

    }
);