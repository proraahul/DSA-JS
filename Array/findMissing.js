function findMissing(arr1,arr2,n,m){
    //code here
    let setB = new Set(arr2);
let missingElements = [];

for(let i = 0; i < n; i++){
    if(!setB.has(arr1[i])){
        missingElements.push(arr1[i]);
    }
}

return missingElements;
}

let A = [1, 2, 3, 4, 5, 10];
let B = [2, 3, 1, 0, 5];
let n = A.length;
let m = B.length;
let result = findMissing(A, B, n, m);
console.log(result);