// write a program to sort an aaray of integers in ascending order using bubble sort but skip over any elements that are already in their correct position:

function bubbleSortWithOptimization(arr){
    const n = arr.length;
    let swapped;
  
    for(let i = 0; i < n - 1; i++){
      swapped = false;
  
      // Last i elements are already in place, so no need to check them
      for(let j = 0; j < n - i - 1; j++){
        // If the element found is greater than the next element
        if(arr[j] > arr[j + 1]){
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
  const sortedArray = bubbleSortWithOptimization([...unsortedArray]); // Copy the array to avoid modifying the original
  
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array:", sortedArray);
  