let arr = [2,[3,12,24],17,[54,[24,3],8]];
let result = [];

function flattenArr(arr ,i){
    if(i >= arr.length){
        return;
    }

    if(Array.isArray(arr[i])){
            flattenArr(arr[i], 0)
    }else{
        result.push(arr[i]);
    }

    flattenArr(arr, i+1);
    
}



flattenArr(arr, 0);
console.log(result);