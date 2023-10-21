const arr = [1,2,3,4,5,6,7,8,9];

const newArr = arr.reduce((acc, element, index, arr) => {
        return acc + element;
},0)

console.log(newArr);