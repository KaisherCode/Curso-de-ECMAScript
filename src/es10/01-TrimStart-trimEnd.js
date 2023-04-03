`Eliminar espacios en blanco de un string`

const hello = '        Hello World      ';
console.log(hello.trim());
console.log(hello.trimStart());
console.log(hello.trimEnd());

/**
 * Hello World
 * Hello World.....     
        Hello World
 */