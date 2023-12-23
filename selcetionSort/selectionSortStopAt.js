function selectionSortStopAt(arr, stopElement) {
    const n = arr.length;
  
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
  
      // Check if the stop element has been found
      if (arr[i] === stopElement) {
        break;
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const inputArray = [64, 25, 12, 22, 11, 30];
  const stopElement = 22; // Sorting stops once this element is found
  const sortedArray = selectionSortStopAt(inputArray, stopElement);
  console.log("Sorted Array (up to stop element):", sortedArray);
  