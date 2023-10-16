
const add = (x,y) => x+y;


// try{
//     let result = add(10, 20);
//     console.log(result);
// }
// catch(e){
//     console.log({ Name:  e.name, message: e.massage });
// }

// console.log('Bye');


// let result = 0;
// try{
//     result = add(10,20);
// }
// catch(e){
//     console.log(e.message);
// }finally{
//     console.log({result});
// }


function fn(){
    try{
        return 1;
    }
    catch{
        return 2;
    }
    finally{
        return 3;
    }
}


console.log(fn());