let promise = new Promise(function(resolve, reject){
    const a = 'helloWorld';
    const b = 'primathonacademy';

    if(a===b){
        resolve();
    }else{
        reject();
    }
});

promise.
then(function(){
    console.log('Success, Welcome to Primathon Academy');
}).catch(function(){
    console.log('Some error has occurred');
});