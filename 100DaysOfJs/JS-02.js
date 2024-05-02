// implement a function generateHash that generates a hash tag from a given input string.

function generateHash(str){
    if(str.length > 200 || str.trim().length ===0) return false;

    str = str.split(' ');

    str = str.map((curElem)=>
        // console.log(curElem[0]);

        // !Method:1
        // curElem.replace(curElem[0], curElem[0].toUpperCase())
        
        // !Method:1
        curElem.charAt(0).toUpperCase() + curElem.slice(1)

    )
    str = `#${str.join('')}`;
    console.log(str);

}

let str = 'my name is rahul saini';
generateHash(str);