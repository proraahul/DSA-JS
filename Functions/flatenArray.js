function flattenArr(arr){
    return arr.reduce((result, array)=> result.concat(array));
}
console.log(flattenArr([[1,2,3], [4,5,6], [7,8,9]]));