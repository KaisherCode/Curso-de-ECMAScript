// asignación de desestructuración
// arrays destructuring - desestructuración de matrices

let fruits = ['Apple','Banana','Orange'];
let [a,b,c]=fruits;
console.log(a,b,c);
console.log(a,b,fruits[1]);

// Otro truco para acceder a otros elementos de un arreglo
let fruitas = ['Apple','Banana','Orange'];
let [,,fruita]=fruitas;
console.log(fruita);


// Object destructuring - Desestructuración de objetos
let user = {username:'Wison',age:25,country:'PE'};
let{username,age} = user;
console.log(username,user.age,user.country);

// cambiar el nombre de las variables con desestructuracion
const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }
const { nombre: name, edad: age1, plataforma: platform } = usuario
console.log(name,age1,platform);