// Given two strings A and B consisting of lowercase english characters. Find the characters that are not common in the two strings. 

function UncommonChars(A, B){
    //code here

    let setA = new Set(A.split(''));
    let setB = new Set(B.split(''));
    
    const concatenateSet = new Set([...setA, ...setB]);
    
    let uncommonArray = Array.from(concatenateSet).filter((char)=> 
    !(setA.has(char) && setB.has(char))).sort().join('')
    
    return uncommonArray || -1;
    
}

let A = 'geeksforgeeks';
let B = 'geeksquiz';
let result = UncommonChars(A, B);
console.log(result);
