`Cómo transformar un array de arrays en un objeto
El método Object.fromEntries devuelve un objeto a partir de un array
donde sus elementos son las entries en forma [propiedad, valor].
`

const entries = new Map([["name","oscar"],["age",29]]);
console.log(entries);
console.log(Object.fromEntries(entries));

/**
Map(2) { 'name' => 'oscar', 'age' => 29 } <Antes de pasar fromEntries>
{ name: 'oscar', age: 29 }
*/

// Ejemplo 2

const arrayEntries = [['name','Andres'],['email','andres@dominio.com'],['age',23]];
const usuario = Object.fromEntries(arrayEntries);
console.log(usuario);
/*
{
    name: 'Andres',
    email: 'andres@dominio.com'
    , age: 23
}
*/