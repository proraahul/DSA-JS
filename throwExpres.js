function add(x, y){
    if(typeof x !== 'number'){
        throw 'The first argument must be a number';
    }
    if(typeof y !== 'number'){
        throw 'The second argument must be a number'
    }

    return x+y;
}

const result = add('a', 10)
    console.log(result);

    // to handle the exception we use try and catch statement:

    function add(x, y){
        if(typeof x !== 'number'){
            throw 'The first argument must be a number';
        }
        if(typeof y !== 'number'){
            throw 'The second argument must be a number'
        }
    
        return x+y;
    }

    try {
        const result = add('a', 10);
        console.log(result)
    }catch(e){
        console.log(e)
    }