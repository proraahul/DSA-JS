function binarySearch2D(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        // Empty matrix
        return -1;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    let row = 0;
    let col = cols - 1;

    while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
            // Found the target value
            return { row, col };
        } else if (matrix[row][col] < target) {
            // Move to the next row
            row++;
        } else {
            // Move to the previous column
            col--;
        }
    }

    // If the target value is not found, return -1
    return -1;
}

// Example usage:
const sortedMatrix = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17]
];

const targetValue = 6;
const result = binarySearch2D(sortedMatrix, targetValue);

if (result !== -1) {
    console.log(`The target value ${targetValue} is found at row ${result.row}, column ${result.col}.`);
} else {
    console.log(`The target value ${targetValue} is not found in the matrix.`);
}
