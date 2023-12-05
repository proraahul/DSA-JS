function firstElementKTime(arr,n,k){
    //code here
    let map = new Map();
    
    for(let i=0; i<n; i++){
        if(map.has(arr[i])){
              map.set(arr[i], map.get(arr[i])+1);
        }else{
             map.set(arr[i], 1);
        }
        
        if(map.get(arr[i]) == k){
            return arr[i];
        }
    }
    return -1;
}


let arr = [1, 7, 4, 3, 4, 8, 7];
let n = 7;
let k = 2;

let result = firstElementKTime(arr, n, k);
console.log(result)