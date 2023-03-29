// con var se puede reagisnar. Tiene un alcance global

var lastName = 'David'; // Declaramos y asignamos la variable lastName
lastName = 'Oscar';     // Reasignamos nuestra variable 
console.log(lastName);

// con let se puede reasignar. Es de alcance de bloque
let fruit = 'Apple'; // Declaramos y asignamos la variable lastName
fruit = 'Kiwi'; // Reasignamos nuestra variable 
console.log(fruit);

// No se pude reasignar con "const". Es de alcance bloque
const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = ()=>{
    if(true){
        var fruit1 = 'Apple'; // functions scope
        let fruit2 = 'Kiwi'; // Block scope
        const fruit3 = 'Banana'; //Block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
