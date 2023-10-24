
// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
// (x) => x >= 0 is a callback function
// removeNeg() as an argument.

// Display Result
  console.log(posNumbers);

// Remove negative numbers
function removeNeg(numbers, callback){
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}