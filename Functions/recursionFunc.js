function sumRange1(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}
console.log(sumRange1(10));


function sumRange2(n){
    return (n * (n+1)) / 2;
}
console.log(sumRange2(10));



function sumRange3(n){
    let sum = 0;
    for(let i=n; i>=1; i--){
        sum += i
    }

    return sum;
}
console.log(sumRange3(10));


// Recursion Function:

function sumRange4(n){
    if(n === 1){
        return 1;
    }
    return n + sumRange4(n-1);
}

const result = sumRange4(5);
console.log(result);