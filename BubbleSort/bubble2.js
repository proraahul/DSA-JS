// write a program to sort an aaray of integers in ascending order using bubble sort but stop sorting once a certain element has been found:

function bubbleSortWithStop(arr, stopElement) {
    const n = arr.length;
  
    for(let i = 0; i < n - 1; i++){
      let foundStopElement = false;
  
      // Last i elements are already in place, so no need to check them
      for(let j = 0; j < n - i - 1; j++){
        // If the element found is greater than the next element
        if(arr[j] > arr[j + 1]){
          // Swap arr[j] and arr[j + 1]
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
  
          // Check if the stop element is found
          if(arr[j] === stopElement || arr[j + 1] === stopElement){
            foundStopElement = true;
            break;
          }
        }
      }
  
      // If the stop element is found, stop sorting
      if(foundStopElement){
        break;
      }
    }
    return arr;
  }
  
  // Example usage
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const stopElement = 22;
  
  const sortedArray = bubbleSortWithStop([...unsortedArray], stopElement);
  
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array (until stop element):", sortedArray);
  