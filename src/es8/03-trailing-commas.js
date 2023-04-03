// Triling commas

const array = [24,34,25,24];

console.log(array); // [24,34,25,24]
console.log(array.length); // 4

const arr = [1,2,3,4,5,,,];
console.log(arr); // [ 1, 2, 3, 4, 5, <2 empty items> ]
console.log(arr.length); // 7

const usuario = {
    name: 'Andres',
    email: 'andres@correo.com',
    age:23, // trailing comma
}
console.log(usuario);