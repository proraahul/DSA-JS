// Sort an array of 0s, 1s and 2s
function sort012(arr, N)
{
    //your code here
    let low = 0;
    let mid = 0;
    let high = N-1;
    
    while(mid <= high){
        if(arr[mid] == 0){
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++;
            mid++;
        }else if(arr[mid] == 1){
            mid++;
        }else{
            // mid == 2
            let temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            
            high--
        }
    }
    return arr;
}
let arr = [0, 2, 1, 2, 0];
let N = 5;
let result = sort012(arr, N);
console.log(result);
