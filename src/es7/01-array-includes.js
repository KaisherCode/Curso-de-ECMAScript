// Array includes
`El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.`
let numbers = [1,3,4,6,7,8];
console.log(numbers.includes(4));

const list = ['Oscar', 'David','Ana','Kaisher' ];
console.log(list.includes('oscar'));


//Utilizando strings
const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true

// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true