
    function romanToDecimal(str){ 
      //code here
       const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };


    let result = 0;


    for(let i = str.length - 1; i >= 0; i--){
        let currentNumeralValue = romanNumerals[str[i]];

        if(i < str.length - 1 && currentNumeralValue < romanNumerals[str[i + 1]]){
            result -= currentNumeralValue;
        }else{
            result += currentNumeralValue;
        }
    }

    return result;
    }


    let str = 'V';
    let result = romanToDecimal(str)
    console.log(result);