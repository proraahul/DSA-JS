let num = 32456;

function digitSum(num){
    if(num == 0){
        return num;
    }
    return num%10 + digitSum(parseInt(num/10));
}

console.log(digitSum(num));