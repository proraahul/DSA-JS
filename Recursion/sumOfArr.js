let arr = [1,2,3,4,5,6,7,8,9];


function sumOfArr(i, arr){

        if(i >= arr.length){
            return 0;
        }

        return arr[i] + sumOfArr(i+1, arr);
        
}

console.log(sumOfArr(0, arr));