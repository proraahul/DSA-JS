// function display(some){
//     console.log(some);
// }

// function myCalculator(num1, num2){
//     let sum = num1 + num2;
//     return sum;
// }

// let result = myCalculator(5,5);
// display(result);

// !The problem with the first example above, is that you have to call two functions to display the result.

// function display(some){
//     console.log(some);
// }

// function myCalculator(num1, num2){
//     let sum = num1 + num2;
//     display(sum);
// }

// myCalculator(5,5);

// !The problem with the second example, is that you cannot prevent the calculator function from displaying the result. Now it is time to bring in a callback.

function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// In the example above, myDisplayer is a called a callback function. It is passed to myCalculator() as an argument.
