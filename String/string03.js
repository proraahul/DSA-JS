// Remove char from String

const removeChar = (string, char) => {

    return string.split("").filter(i => i !== char).join("");

}

let str = 'Hello World';

let char = 'o';
console.log(removeChar(str , char));