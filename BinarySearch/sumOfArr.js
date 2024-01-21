function binarySearchAndSum(sortedArray) {
    let left = 0;
    let right = sortedArray.length - 1;
    let sum = 0;

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        const midValue = sortedArray[mid];

        sum += midValue;

        left = mid + 1; // Move to the right half
    }

    return sum;
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultSum = binarySearchAndSum(sortedArray);

console.log(`Sum of all elements in the array: ${resultSum}`);
