// Write a program to sort an array of integers in ascending order using bubble sort, but stop sorting once a certain number of swaps have been performed.

function bubbleSortWithMaxSwaps(arr, maxSwaps) {
    const n = arr.length;
    let totalSwaps = 0;
  
    for (let i = 0; i < n - 1; i++) {
      let swapsInPass = 0;
  
      // Last i elements are already in place, so no need to check them
      for (let j = 0; j < n - i - 1; j++) {
        // If the element found is greater than the next element
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j + 1]
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
  
          swapsInPass++;
          totalSwaps++;
  
          // Check if the maximum number of swaps has been reached
          if (totalSwaps >= maxSwaps) {
            return arr;
          }
        }
      }
  
      // If no swapping occurred in this pass, the array is already sorted
      if (swapsInPass === 0) {
        break;
      }
    }
  
    return arr;
  }
  
  // Example usage
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const maxSwaps = 5;
  
  const sortedArray = bubbleSortWithMaxSwaps([...unsortedArray], maxSwaps);
  
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array (with max swaps):", sortedArray);
  