// WAF to split a string and convert into an array of words.

function stringToArray(str){
  
    let newArr1 = str.split('');
    let newArr2 = str.split(' ');
    let newArr3 = str.split('-');
    
    console.log(newArr1);
    console.log(newArr2);
    console.log(newArr3);
    
  }
  
  stringToArray('Hello Mr Rahul saini');