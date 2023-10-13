// WJF to chop a string into chunks of a given length


function chop_String(str, size = str.length){
  let arr = [];
  let i = 0;

  while(i < str.length){
    arr.push(str.slice(i, i + size));
    i = i + size;
  }

  return arr;
}

console.log(chop_String("Javascript", 3));
console.log(chop_String("Javascript", 2));
console.log(chop_String("Javascript"));
