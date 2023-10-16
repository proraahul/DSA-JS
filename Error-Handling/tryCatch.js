let num = 1;

try{
    num.toUpperCase();
}
catch(e){
    console.log('Error Caught name of error is: ', e.name);
    console.log('Message of error Error says: ', e.message);
}