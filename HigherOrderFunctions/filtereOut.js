const ages = [1,2,4,5,7,8,10,11,12];

const output = [];

const filtereAge = (logic) => {
    for(let i = 0; i < ages.length; i++){
        logic(ages[i]) ? output.push(logic(ages[i])) : null
    }
    return output;
}

const ageCalculation = (input) => {
    if(input < 5 || input > 10){
        return input;
    }
    console.log(input)
}


filtereAge(ageCalculation);
console.log(output);