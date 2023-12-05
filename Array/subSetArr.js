function isSubset(a1, a2, n, m) {
    // Create a frequency map for elements of a1
    const frequencyMap = new Map();

    // Populate the frequency map for elements of a1
    for (let i = 0; i < n; i++) {
        if (!frequencyMap.has(a1[i])) {
            frequencyMap.set(a1[i], 1);
        } else {
            frequencyMap.set(a1[i], frequencyMap.get(a1[i]) + 1);
        }
    }

    // Iterate through elements of a2
    for (let i = 0; i < m; i++) {
        // Check if the current element of a2 is present in frequencyMap
        if (!frequencyMap.has(a2[i]) || frequencyMap.get(a2[i]) === 0) {
            // If not, or if the frequency is 0, a2 is not a subset of a1
            return "No";
        } else {
            // Decrement the frequency of the current element in the map
            frequencyMap.set(a2[i], frequencyMap.get(a2[i]) - 1);
        }
    }

    // If all elements of a2 are found in a1 with sufficient frequency, then a2 is a subset of a1
    return "Yes";
}

let arr1 =  [11, 7, 1, 13, 21, 3, 7, 3];
let arr2 = [11, 3, 7, 1, 7];
let n = arr1.length;
let m = arr2.length;

let result = isSubset(arr1, arr2, n, m);
console.log(result)


