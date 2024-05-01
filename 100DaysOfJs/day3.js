// write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

function counterChar(str, char) {
    str = str.toLowerCase();
    char = char.toLowerCase();
  
  totalCount = str.split("").reduce((accum, curChar) => {
      if (curChar === char) {
        accum++;
      }
      return accum;
    }, 0);
    return totalCount;
  }
  
  let str = "MissIssippi";
  let char = "I";
  console.log(counterChar(str, char));
  