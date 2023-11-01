async function getData(){
    const response = await
    fetch('https://api.github.com/users/rahulsaini3113');

    const data = await response.json();

    console.log('Data is', data);
}

getData()