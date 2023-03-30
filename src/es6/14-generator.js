function* iterate(array){
    for (let value of array){
        yield value;
    } 
}

const it = iterate(['Kaisher','Oscar','Ulises','Ana','jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// si agregamos console.log item 6 nos devuelve undefined(no definido)