function fun(){
    function closure(val){
            return function (){
                return val;
            };
    };

var a = [];
var i;
    for(let i = 0; i<5; i++){
        a[i] = closure(i);
    }
    return a;
}
var output = fun();
console.log(output)