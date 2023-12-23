// Write a program to sort an array of integers in ascending order using selection sort, but only for the first k elements of the array:


function selectionSortFirstK(arr, k) {
    const n = Math.min(arr.length, k);
  
    for (let i = 0; i < n - 1; i++) {
      // Find the minimum element in the unsorted part of the array
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap only if the minimum element is not in its correct position
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const inputArray = [64, 25, 12, 22, 11];
  const k = 3; // Sort only the first 3 elements
  const sortedArray = selectionSortFirstK(inputArray, k);
  console.log("Sorted Array (first k elements):", sortedArray);
  