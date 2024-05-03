const findMax = (arr) => {
    // return Math.max(1,5,3,9,2);
    return Math.max(...arr);
}

console.log(findMax([1,5,3,9,2]));
console.log(findMax([-10, -5, -3, -9, -2]));
console.log(findMax([5]));