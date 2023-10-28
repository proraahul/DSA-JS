const getUser = (url) => {
    const pendingUSerData = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Primathon Employee')
        }, 3000);
    });

    pendingUSerData.then((user) => {
        it.next(user);
    });
};

function* printUSer(){
    const user = yield getUser('https://user.end.point');

    console.log('User is', user)
}

const it = printUSer();

it.next();