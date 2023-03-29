// Concatenación de caracteres - Antes de ES6

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' '+ world + '!';
console.log(epicPhrase);

// Como usar Template literals
var name = 'Wilson';
var age = 33;
var mesage = `My name is ${name} and I am ${age} years old.`;
console.log(mesage);

// Multi-line string - Antes de ES6
let lorem ='esto es un string \n ' + 'esto es otra linea';

// Con ES6 solamente necesitas  utilizar Template literals.
let lorem2 = `Esta es una frase epica
    la continuacion de esa frase epica.
`;

console.log(lorem);
console.log(lorem2);