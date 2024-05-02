// write a function findLongestWord that takes string as input and returns the longest word in the string, if there is multiple longest word, return the first one encountered.


//! Method: 1 

function findLongestWord(str){
    if(str.trim().length === 0) return false;

    let words = str.split(' ');
    // console.log(words);

    // words = words.sort((a,b) => b.length - a.length);
    // console.log(words);
    // return words[0];

    //! Method: 2
    // return words.reduce((accum, curWord) => curWord.length > accum.length? curWord : accum);


    //! Method: 3
    let ans = '';
    for(let i=0; i<words.length; i++){
        if(words[i].length > ans.length) {
            ans = words[i]
        }
    }
    return ans; 
    }   

let str = 'code never lies comments sometime do'
console.log(findLongestWord(str));