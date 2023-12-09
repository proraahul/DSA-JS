function count(s){
    let upperCaseCount = 0;
    let lowerCaseCount = 0;
    let numericCount = 0;
    let specailCount = 0;
    
    for(let i=0; i<s.length; i++){
      let char = s[i];
      
      if(char >= 'A' && char<= 'Z')
      upperCaseCount++
      else if(char >= 'a' && char <= 'z')
      lowerCaseCount++
      else if( char >= 0 && char <= 9)
      numericCount++
      else
      specailCount++
    }
    return [upperCaseCount, lowerCaseCount, numericCount, specailCount];
  }
  
  
  
  
  
  // Example usage:
  let input1 = "#GeeKs01fOr@gEEks07";
  let result1 = count(input1);
  console.log(result1); // Output: [5, 8, 4, 2]
  
  let input2 = "*GeEkS4GeEkS*";
  let result2 = count(input2);
  console.log(result2); // Output: [6, 4, 1, 2]