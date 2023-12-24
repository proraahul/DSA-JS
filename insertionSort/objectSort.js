// sort an array of string using insertion sort in javascript

function insertionSort(arr, property) {
    for (let i = 1; i < arr.length; i++) {
      let currentElement = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j][property] > currentElement[property]) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Example usage:
  let unsortedArray = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 22 },
    { name: "Eve", age: 28 }
  ];
  
  let sortedArray = insertionSort(unsortedArray, "name");
  
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array:", sortedArray);
  