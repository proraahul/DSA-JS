// WAF to check wheather a string a blank or not.

function isBlank(str){
    let strLength = str.length;

    if(strLength === 0){
        console.log(true);
    }else{
        console.log(false)
    }
}

isBlank('Hello');
isBlank('')