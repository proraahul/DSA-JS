// lot of things can be solved by just getting map of a string characters:

const map = {};
const string = "Hello World";
const array = string.split("");
// console.log(array);
array.forEach(i => map[i] ? map[i] = map[i] + 1 : map[i] = 1);
console.log(map)

