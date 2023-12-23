function selectionSortDescending(array){
    let n = array.length;

    for(let i=0; i<n; i++){
        let maxIndex = i;
        for(let j=i+1; j<n;j++){
            if (array[j] > array[maxIndex]){
                maxIndex = j;
        }
    }
    if(maxIndex != i){
        [array[i], array[maxIndex]] = [array[maxIndex], array[i]];
    }
 }
 return array;
}


const unsortedArr = [4,2,7,1,9,6,5,8,3];
const sortedArr = selectionSortDescending(unsortedArr);
console.log(sortedArr);