// Count pairs with given sum

function getPairsCount(arr,n,k){
    //code here
    let result = 0;
    const mp = new Map();
    
    for(let i=0; i<n; i++){
        if(mp.has(k-arr[i])){
             result += mp.get(k - arr[i]);
        }
        if(!mp.has(arr[i])){
             mp.set(arr[i], 0);
         }
         mp.set(arr[i], mp.get(arr[i]) + 1);
     }
     return result;
    }

    let n = 4
    let k = 6
    let arr = [1, 5, 7, 1]

    let result = getPairsCount(arr, n, k);
    console.log(result);

