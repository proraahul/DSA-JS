
//! Hoisting: 

// var x = 7;
// const getName =()=> {
//   console.log("getName");
// }

// // var getName2 = function() {
// //         console.log('getName2');
// // }

// // function getName3(){
// //     console.log('getName3');
// // }


// getName();
// console.log(x);
// console.log(getName);





// function counter(){
//     var count = 0;
//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
// }

// var counter1 = counter();
// counter1();
// console.log(counter1());

// Encapsulation using closures

function Counter(){
    // console.log(count);
    var count = 0;

this.incrementCounter = function(){
    count++;
    console.log(count);
}
this.decrementCounter = function(){
    count--;
    console.log(count);
}



}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();