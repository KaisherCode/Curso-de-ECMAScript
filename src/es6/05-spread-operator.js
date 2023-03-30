// spread operator - operador de propagación
let person = {name:'Wilson',age:25};
let country='PE';

let data ={id:1,...person,country};
console.log(data);

// rest

function sum(num,...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3);