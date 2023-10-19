function letterCount(str, letter){
    let count = 0;
    str = str.toLowerCase();

    for(let i=0; i<str.length; i++){
        if(str.charAt(i) == letter){
            count++;
        }
    }
  return count;
}


console.log(letterCount('concat', 'c'));
console.log(letterCount('first person', 's'));