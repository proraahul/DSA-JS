async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      resolve("I love You !!");
    });
let result = await myPromise;
console.log(result);
  }
  
  myDisplay();