
/*
the JavaScript engine first looks up the counter variable in the local scope of the getCounter() function. Because there is no var, let, or const keyword, the counter variable is not available in the local scope. It hasn’t been created.

Then, the JavaScript engine follows the scope chain and looks up the counter variable in the global scope. The global scope also doesn’t have the counter variable, so the JavaScript engine creates the counter variable in the global scope.

To fix this “weird” behavior, you use the 'use strict' at the top of the script or at the top of the function:

*/

// 'use strict'

function getCounter() {
    counter = 10;
    return counter;
}

console.log(getCounter());