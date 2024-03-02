// function statement: Function Hoisted
a();
function a(){ 
    console.log('a called');
 }


// function Expression: assign as a value to a variable
// not hoisted
var b = function (){
    console.log('b called');
}
b()
// Function Declaration: function statement are both same thing.


//Anonymous Function: when the function use as values, it act as a values
// function () { }

// Named Function Experession : 

var c = function xyz(){
    console.log('xyz');
}
c()


// First Class Function: function can pass in another function as a arguments
function abc(){
    return function hello(){}
}
console.log(abc());

// Arrow Function