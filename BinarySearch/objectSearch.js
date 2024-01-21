function binarySearchByProperty(arr, targetValue, propertyName) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid][propertyName] === targetValue) {
            // Found a match, return the index
            return mid;
        } else if (arr[mid][propertyName] < targetValue) {
            // Continue searching in the right subarray
            left = mid + 1;
        } else {
            // Continue searching in the left subarray
            right = mid - 1;
        }
    }

    // If the target value is not found, return -1
    return -1;
}

// Example usage:
const sortedArrayOfObjects = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 }
];

const targetValue = 30;
const propertyName = "value";

const resultIndex = binarySearchByProperty(sortedArrayOfObjects, targetValue, propertyName);

if (resultIndex !== -1) {
    console.log(`The target value ${targetValue} is found at index ${resultIndex}.`);
} else {
    console.log(`The target value ${targetValue} is not found in the array.`);
}
