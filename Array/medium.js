// Given an array arr containing N integers and a positive integer K, find the length of the longest sub array with sum of the elements divisible by the given value K.

function longSubarrWthSumDivByK(arr,n,k){
    //code here
    let ans = 0;
    let sum = 0;
    let mm = new Map();
    
    for(let i=0; i<n; i++){
        sum += arr[i];
        let rem = sum % k;
        if(rem<0)
        rem += k;
        
        if(rem === 0){
            ans = i+1;
        }else{
            if(mm.get(rem) !== undefined)
            ans = Math.max(ans, i+1-mm.get(rem));
            else 
            mm.set(rem, i+1)
        }
    }
    return ans;
}

let N = 6, K = 3
let arr = [2, 7, 6, 1, 4, 5];

let result = longSubarrWthSumDivByK(arr, N, K);
console.log(result);