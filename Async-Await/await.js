async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });
   let result  = await myPromise;
   console.log(result);
  }
  
  myDisplay();