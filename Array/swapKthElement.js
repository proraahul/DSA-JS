let arr = [1,2,3,4,5,6,7,8];
let k = 3;
let n = 8;


function swapNum(arr, n, k){
  
  // check if Kth is withinvalid range
    if(k<=0 || k>n){
      return;
    }
    
    
    const temp = arr[k-1];
    arr[k-1] = arr[n-k];
    arr[n-k] = temp;
    
    return arr;
    
}

console.log(swapNum(arr,n,k));