function countReverse(count){
    console.log(count);

    if(count == 0){
        return;
    }
    setTimeout(() => {countReverse(count-1)}, 1000);
}

countReverse(5);