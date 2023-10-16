function add(a, b) {
  console.log(arguments, "arguments");
  console.log("b = ", b, ", a = ", a);
  console.log("b = ", a, ", a = ", b);
  return a + b;
}
let result1 = add(10, 20);
console.log(result1);

result1 = add("10", 20);
console.log(result1);

result1 = add(10, "20");
console.log(result1);

result1 = add(10, 20, 30);
console.log(result1);

let sum = add;

let result2 = sum(20, 30);
console.log(result2);

// Function to Sum Of Arguments Object

function add2() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add2(1, 2));
console.log(add2(1, 2, 3, 4, 5));

// Passing Function into Another Function

function average(a, b, fn) {
  return fn(a, b) / 2;
}

function sum(a, b) {
  return a + b;
}

let result3 = average(10, 20, sum);
console.log(result3);

