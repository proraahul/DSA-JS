let myobject = {
    name: 'object1',
    value:3,
    children : {
        name: 'object2',
        value: 5,
        children: null
    }
}

function findSum(obj){
    if(obj.children == null){
        return obj.value;
    }
    return obj.value + findSum(obj.children);
}

console.log(findSum(myobject));