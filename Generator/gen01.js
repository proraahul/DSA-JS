function* testGenerator(){
    const two = yield 2;
    return 2;
}

const it = testGenerator();

console.log(it);

console.log(it.next());

console.log(it.next(3));

console.log(it.next(3));