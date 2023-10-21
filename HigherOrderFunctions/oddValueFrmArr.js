let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOdd = (arr) => {
    const newArr = [];
    for(let i=0; i<arr.length; i++){
        // if(arr[i]%2 !== 0){
        //     newArr.push(arr[i])
        // }
        if(arr[i]%2 == 0){
            newArr.push(arr[i])
        }
    }
    return newArr;
};

// console.log(printOdd(arr));


/* it can be notice that there is a lot of duplicate code in both of the function. the only difference between them is the logic.
this is where Higher Order Function comes in to make a reusable function. */

const filterFunction = (arr, callback) => {
    const filteredArr = [];
    for(let i=0; i< arr.length; i++){
        callback(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    return filteredArr;
}

function isOdd(x){
    return x%2 != 0;
}

function isEven(x){
    return x%2 == 0;
}

console.log(filterFunction(arr, isOdd));
console.log(filterFunction(arr, isEven));