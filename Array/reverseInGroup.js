// Javascript program to reverse every sub-array
// formed by consecutive k elements
// Function to reverse every sub-array
// formed by consecutive k elements

function reverseInGroup(arr, n, k){

    for(let i = 0; i<n; i += k){
        let left =i;
        let right = Math.min(i+k-1, n-1);
        let temp;

        while(left < right){
        // Swap elements at left and right indices
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move towards the center
        left++;
        right--;
        }
    }
}

let arr1 = [1, 2, 3, 4, 5, 6];
let N1 = 6;
let K1 = 3;
reverseInGroup(arr1, N1, K1);
console.log(arr1); // Output: [3, 2, 1, 5, 4]

let arr2 = [5, 6, 8, 9];
let N2 = 4;
let K2 = 3;
reverseInGroup(arr2, N2, K2);
console.log(arr2); // Output: [8, 6, 5, 9]