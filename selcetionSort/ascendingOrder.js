function selectionSortAscending(arr){
    let n = arr.length;
    for(let i=0; i<n; i++){
        let minIndex = i;
        for(let j=i+1; j<n; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex != 0){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }   
    }
    return arr;
}


const unsortedArr = [4,2,7,1,9,6,5,8,3];
const sortedArr = selectionSortAscending(unsortedArr);
console.log(sortedArr);