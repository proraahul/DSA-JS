function printAcademyName(message){
    console.log('Primathon Academy');
}

function greet(msg){
    console.log('Message Here:', msg);
}

setTimeout(() => {
    printAcademyName();
}, 2000);

greet('Hello world');