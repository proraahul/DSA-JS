function sumOfSquareOfArray(arr){
    if(arr.length === 0){
        return 1;
    } else if(arr.length === 1 && !isNaN(arr[0])){
        return arr[0] * arr[0];
    }


const item = arr[0];
const newArray = arr.slice(1, arr.length);


if(Array.isArray(item)){
    return sumOfSquareOfArray(item) * sumOfSquareOfArray(newArray);
}

return item * item  + sumOfSquareOfArray(newArray);

}


// let arr = [1,2, [3,4]];
let arr = [1,2,3, [4,5, [6,7]], [2, [5,7],[6]]];
console.log(sumOfSquareOfArray(arr));