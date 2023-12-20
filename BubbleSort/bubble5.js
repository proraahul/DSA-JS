// Write a program to sort a 2D array of strings in alphabetical order using bubble sort:

function bubbleSort2DArrayStrings(arr){
    const rows = arr.length;
  
    for(let i = 0; i < rows - 1; i++){
      let swapped = false;
  
      // Last i rows are already in place, so no need to check them
      for(let j = 0; j < rows - i - 1; j++){
        // Compare the first string of each row (you can modify this based on your sorting criteria)
        if(arr[j][0] > arr[j + 1][0]){
          // Swap entire rows arr[j] and arr[j + 1]
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
  
  // Example usage: Sorting a 2D array of strings alphabetically
  const unsortedArray2D = [
    ['banana', 'apple', 'orange'],
    ['grape', 'kiwi', 'cherry'],
    ['peach', 'plum', 'pear'],
  ];
  
  const sortedArray2D = bubbleSort2DArrayStrings([...unsortedArray2D]);
  
  console.log("Unsorted 2D Array:", unsortedArray2D);
  console.log("Sorted 2D Array (alphabetically):", sortedArray2D);
  