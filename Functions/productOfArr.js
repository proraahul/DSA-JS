
function productOfArray(arr){
    if(arr.length === 0){
        return 1;
    }
    const newArray = arr.slice(1, arr.length);
    return arr[0] * productOfArray(newArray);
}

console.log('productOfArray[1,2]: ', productOfArray([1,2]));
console.log('productOfArray[1,2,3,4,5]: ', productOfArray([1,2,3,4,5]));



function productOfArray2(arr){
    if(arr.length === 0){
        return 'product of empty array not possible'
    }else if(arr.length === 1){
        return arr[0]
    }

    const newArray = arr.slice(1, arr.length);
    return arr[0] * productOfArray2(newArray)
}
console.log('productOfArray2([1,2,3,4,5]): ',productOfArray2([1,2,3,4,5]));
console.log('productOfArray2([]): ',productOfArray2([]));


function gcd(a, b){
    if(a == 0){
        return b;
    }
    if(b == 0){
        return a;
    }

    if(a == b){
        return a;
    }

    if(a>b){
        return gcd(a-b, b);
    }
    return gcd(a, b-a)
}

console.log(gcd(10, 20))
