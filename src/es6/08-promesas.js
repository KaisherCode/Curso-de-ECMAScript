// Promesas
`
Una promesa es una forma de manejar el asincronismo
en JavaScript y se representa como un objeto que
puede generar un valor único a futuro, que tiene dos
estados, o está resuelta o incluye una razón por la
cual no ha sido resuelta la solicitud.
`
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
    .catch(err => console.log(err));

    // more example

const promesa = () => {
    return new Promise((resolve,reject) => {
        if (true){
            resolve('Se ha resuelto la priomesa');
        } else{
            reject('Se ha rechazado la promesa');
        }
    })
}

promesa()
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error));