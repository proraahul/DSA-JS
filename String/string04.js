const getMaxChar = (string) => {
    const map = {};

    string.split("").forEach(char => {
        map[char] = map[char] ? map[char] + 1 : 1;
    });

    max = 1;
    char = string[0];
    for(let k in map){
        if(map[k] > max) {
            max = map[k];
            char = k
        }
    }
    return char;
}
console.log(getMaxChar("hello world"));