const exampleFunc = async () => {
    const result1 = await new Promise((resolve) => {
        setTimeout(() => {console.log('1')});
    });
}

exampleFunc();