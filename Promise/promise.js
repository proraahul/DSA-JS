const count = true;

let countValue = new Promise(function (resolve, reject){
    if(count){
        resolve('There is count value');
    }else{
        reject('There is no count value');
    }
});

console.log(countValue);

// Promise always return promise: