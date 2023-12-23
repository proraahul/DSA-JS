let nums = [11,12,13,14,15,16,17,18,19,20];

function bs(arr, target, st, end){
    if(st <= end){
        let mid = parseInt((st+end/2));

        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            return bs(arr, target, mid+1, end)
        }else if(arr[mid] > target){
            return bs(arr, target, st, mid-1)
        }
    }
    return -1;
}

var Search = function(nums, target){
    return bs(nums, target, 0, nums.length-1)
}

console.log(Search(nums, 19))