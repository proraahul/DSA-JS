
// 1. Number
// 2. slice
// 3. indexOf
// 4. split()
// 5. join() 
// 6. toUpperCase()
// 7. pop(), push
// 8. shift, unshift()


function customNumber(){
    let n_type = typeOf(n)
    let t = 0

    if(n_type == "number")){
        return n 
    }
    else if(n_type == "boolean"){
        return n ==true  ? 1 : 0
    } 
    
   else if(n_type == "string"){
    let str = "0123456789."
    for(let i=0; i<=n.length-1; i++){
        let flag = 0
         for(let j = 0;j<=str.length; j++){
            if(n[i] == str[j]){
                flag |= 1
                break
            }
         }
         if(flag == 0){
            return "NaN"
         }
        }
        let k = n.CharCodeAt(i)
        t= t*10 + k-48
    }
        return t
}
}


console.log(customNumber(10))
console.log(customNumber("13"))
console.log(customNumber("13.5123"))
console.log(customNumber("13.5p"))
console.log(customNumber(true))





