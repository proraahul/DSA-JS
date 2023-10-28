const getUser = (url) => {
    setTimeout(() => {
        it.next('primathon student')
    }, 3000);
};

function* printUser(){
    const user = yield getUser('https://user.end.point');

    console.log('User is', user);
}

const it = printUser();

it.next();