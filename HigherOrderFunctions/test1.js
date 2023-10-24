const differentOperations = (arr, operation) => {
    const output =[];
    for(let i=0; i<arr.length; i++){
        output.push(operation(arr[i]));
    }
    return output;
}


const addBy2 = (input) => {
    return input + 2;
}

const substractBy2 = (input) =>{
    return input - 2;
}

const divideBy2 = (input) => {
    return input / 2;
}

const multiplBy2 = (input) => {
    return input * 2;
}

const addResult = differentOperations([1,2,3], addBy2);
const substractResult = differentOperations([2,4,6], substractBy2);
const divideResult = differentOperations([10,20,30], divideBy2);
const multiplyResult = differentOperations([1,2,3], multiplBy2);


console.log('Add: ', addResult);
console.log('Subtract: ', substractResult);
console.log('Multiply: ', multiplyResult);
console.log('Divide: ', divideResult)