// Objet entries

// Obtener los pares de valor de un objeto en un array

const countries = {MX:'Mexico',
    CO:'Colombia',
    CL:'Chile',
    PE:'Perú'
};
console.log(Object.entries(countries));

//output 
/* [
  [ 'MX', 'Mexico' ],
  [ 'CO', 'Colombia' ],
  [ 'CL', 'Chile' ],
  [ 'PE', 'Perú' ]
]
*/

// Otro ejemplo

const usuario = {
    name: 'Kaisher',
    email: 'kaishercode@dev.com',
    age: 29,
}

console.log(Object.entries(usuario));