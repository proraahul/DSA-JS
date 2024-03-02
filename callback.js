// what is callback function: A callback function in JavaScript is a function that is passed as an argument to another function and executed

setTimeout(() => {
    console.log('timer');
}, 3000);


function x(y){
    console.log('x');
    y();

}

x(function y(){
        console.log('y');
})