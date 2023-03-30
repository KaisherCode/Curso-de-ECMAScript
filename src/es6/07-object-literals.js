// enahced object literals - literales de objetos enlazados

function newUser(user,age,country,uId){
    return{
        user,
        age,
        country,
        id:uId,
    }
}
console.log(newUser('kaisher',29,'PE',1));

// How use object literals
const nombre = "Kaisher"
const edad = 29
const country = 'PE'
const objeto ={nombre,edad,country}

console.log(objeto);

// more example
const name = 'Andres'
const age = 34
const esteEsUnId = 1

const object = {
    name,
    age,
    id:esteEsUnId
}
console.log(object);