// ● Write a program to sort an array of strings in alphabetical order using selection sort:
 
function selectionSortStrings(arr){
    const n = arr.length;
  
    for(let i = 0; i<n - 1; i++){
      // Find the minimum element in the unsorted part of the array
      let minIndex = i;
      for(let j=i + 1; j<n; j++){
        if(arr[j].localeCompare(arr[minIndex]) < 0){
          minIndex = j;
        }
      }
  
      // Swap only if the minimum element is not in its correct position
      if(minIndex !== i){
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return arr;
  }
  
  // Example usage:
  const inputArray = ["banana", "apple", "orange", "grape", "cherry"];
  const sortedArray = selectionSortStrings([...inputArray]);
  console.log("Sorted Array of Strings:", sortedArray);
  