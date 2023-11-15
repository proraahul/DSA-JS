function createMultipler(x){

// x = 2

    return function(y){
    // y = 15
        return x*y; //30 

    }

}

const double = createMultipler(2)
const triple = createMultipler(3)

const result = double(triple(5))
console.log(result)