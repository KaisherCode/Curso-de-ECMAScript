// class - clases
`
class User {}; // decalrando
const newUser = new User(); // instancia de una clase
`

class user {
    // metodos
    greeting(){
        return 'Hello';
    }
};
const kaisher = new user();
console.log(kaisher.greeting());
const developer = new user();
console.log(developer.greeting());

// Constructor

class vser{
    // constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    greeting(){
        return 'Hello';
    }
}
const David = new vser();

// this

class user{
    constructor(name){
        this.name = name;
    }
    // metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
};
const ana = new user('Ana');
console.log(ana.greeting());


// setters getters

class user{
    // constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge() {
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper = new user('David',15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge=20);