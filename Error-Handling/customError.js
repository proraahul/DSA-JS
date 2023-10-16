
class NumberError extends Error{
    constructor(value){
        super(`"${value}" is not a valid number`);
        this.name = 'InvalidError'
    }
}

function add(x, y){

    if(typeof x !== 'number'){
        throw new NumberError(x);
    }
    if(typeof y !== 'number'){
        throw new NumberError(y);
    }

    return x + y;

}

try{
    const result = add('a', 10);
    console.log(result);
}
catch(e){
    console.log(e.name, ':', e.message);
}
