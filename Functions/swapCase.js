function swapCase(str) {
  let modStr = str.split("");

  for (let i = 0; i < modStr.length; i++) {
    if (modStr[i] === modStr[i].toLowerCase()) {
      modStr[i] = modStr[i].toUpperCase();
    } else {
      modStr[i] = modStr[i].toLowerCase();
    }
  }

  return modStr.join('');


}

console.log(swapCase("rAhuL"));
