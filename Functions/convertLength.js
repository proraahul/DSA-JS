function cmToIn(length){
    return length / 2.54;
}

function inToCm(length){
    return length * 2.54;
}

function convert(fn, length){
    return fn(length);
}

// convert to inches
let inches = convert(cmToIn, 10);
console.log(inches);

// Convert to Cm
let cm = convert(inToCm, 10);
console.log(cm);

let cm2 = convert(cmToIn, convert(inToCm, 10));
// convert(cmToIn, 25.4);
// 25.4 / 2.54 = ?
console.log(cm2);

let cm3 = convert(cmToIn, convert(inToCm, convert(inToCm, 10)));
console.log(cm3);