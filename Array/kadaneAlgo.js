function maxSubarraySum(arr, N){
    // code here
    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];

for(let i = 1; i < N; i++){
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
}
return maxSoFar;
} 

let N = 5
let Arr = [1,2,3,-2,5];
let result = maxSubarraySum(Arr, N)
console.log(result);