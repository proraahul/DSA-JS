// lot of things can be solved by just getting map of a string characters

const string = "hello world";
const removeDups = [... new Set(string.split(""))].join("")
console.log(removeDups)