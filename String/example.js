function count(s){
    //code here
    let lowerCaseCount = 0;
    let upperCaseCount = 0;
    let NumericCount = 0;
    let specialCharCount = 0;
    
    for(let i=0; i<s.length; i++){
        let currentChar = s[i];
        
        if(currentChar >= 'A' && currentChar <= 'Z'){
            upperCaseCount++
        }
        else if(currentChar >= 'a' && currentChar <= 'z'){
            lowerCaseCount++
        }
        else if(currentChar >= '0' && currentChar <= '9'){
            NumericCount++
        }else{
            specialCharCount++
        }
    }
    return [upperCaseCount, lowerCaseCount, NumericCount, specialCharCount];
}

let str = "#GeeKs01fOr@gEEks07";
let result = count(str);
console.log(result)