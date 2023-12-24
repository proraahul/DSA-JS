// sort an array of string using insertion sort in javascript

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j].localeCompare(currentElement) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentElement;
  }

  return arr;
}

// Example usage:
let unsortedArray = ["banana", "apple", "orange", "pineapple", "grape"];
let sortedArray = insertionSort(unsortedArray);

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
