// Método finally en promesas

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false){
            resolve('Hey!');
        } else{
            reject('Whoooo!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('Finallly'));
     // Whoooo!
    // Finallly 