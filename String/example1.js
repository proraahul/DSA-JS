function longestConsecutiveOnes(binaryString) {
    let maxLength = 0;
    let currentLength = 0;

    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 0;
        }
    }

    return maxLength;
}

// Example usage:
console.log(longestConsecutiveOnes("110"));        // Output: 2
console.log(longestConsecutiveOnes("11101110"));  // Output: 3
