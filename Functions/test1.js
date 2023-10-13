function AbrevatedForm(str){

    let modStr = str.split('');
    let arr = [];

    for(let i = 0; i < modStr.length; i++){
        if(modStr[i] == ' '){
            arr.push(modStr[i]);
            arr.push(modStr[i+1]);
            break;
        }
        arr.push(modStr[i]);
    }
    return arr.join('');
}


console.log(AbrevatedForm('Rahul Saini'));