// Write a program to sort an array of integers in ascending order using bubble sort, but only swapping adjacent elements if they are out of order by a certain threshold (e.g., only swap if the difference between the two elements is greater than 10)

function bubbleSortWithThreshold(arr, threshold){
    const n = arr.length;
  
    for(let i = 0; i < n - 1; i++){
      let swapped = false;
  
      // Last i elements are already in place, so no need to check them
      for(let j = 0; j < n - i - 1; j++){
        // If the elements are out of order by more than the threshold
        if(arr[j] > arr[j + 1] && arr[j] - arr[j + 1] > threshold){
          // Swap arr[j] and arr[j + 1]
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
  
          swapped = true;
        }
      }
  
      // If no swapping occurred in this pass, the array is already sorted
      if(!swapped){
        break;
      }
    }
  
    return arr;
  }
  
  // Example usage
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const threshold = 10;
  
  const sortedArray = bubbleSortWithThreshold([...unsortedArray], threshold);
  
  console.log("Unsorted Array:", unsortedArray);
  console.log(`Sorted Array (with threshold ${threshold}):`, sortedArray);
  