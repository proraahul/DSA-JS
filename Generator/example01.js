//write a generator that yield the natural number in sequence starting from 1 up to some maximum number  which is taken as an input in javascript
/*
function* generateNaturalNumbers(max) {
    let current = 1;
    while (current <= max) {
      yield current;
      current++;
    }
  }
  
  // Example usage:
  const maxNumber = 10;
  const numberGenerator = generateNaturalNumbers(maxNumber);
  
  for (const number of numberGenerator) {
      console.log(number);
    }
    */

    //delay of 1 second using promise

    async function* generateNaturalNumbersWithDelay(max) {
        let current = 1;
        while (current <= max) {
          yield current;
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for 1 second (1000 milliseconds)
          current++;
        }
      }
      
      // Example usage:
      const maxNumber = 5;
      const numberGenerator = generateNaturalNumbersWithDelay(maxNumber);
      
      (async () => {
        for await (const number of numberGenerator) {
          console.log(number);
        }
      })();
      