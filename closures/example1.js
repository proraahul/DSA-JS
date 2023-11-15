/* function User(){
    var username, password;
    function DoLogin(user, pw){
        username = user;
        password = pw;
        // do the rest of the login work
    }

    var publicAPI = {
        login: DoLogin
    };
    return publicAPI
}

// create a user module instance

var fred = User();

fred.login('rahul', '123Battry321');
*/

function foo(){
    const f = 'foo';

    function doo(){
        console.log(f)
    }

    return doo;
};

var afunct = foo();
 afunct();

//  foo is print cause of f's lexical environment