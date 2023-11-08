var y = 20;

function bar() {
    var y = 200;

    function baz() {  
        console.log(y);
    }

    baz();
}

bar();
