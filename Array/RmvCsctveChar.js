// Remove Consecutive Characters

function removeConsecutiveCharacter(s){
    //code here
    let str = '';
    let n = s.length;
    for(let i=0; i<n; i++){
        if(i<n-1 && s.charAt(i) == s.charAt(i+1)){
            continue;
        }
        str += s.charAt(i);
    }
    return str;
}


// let str = 'aabb';
let str = 'aabaa';
let result = removeConsecutiveCharacter(str);
console.log(result)