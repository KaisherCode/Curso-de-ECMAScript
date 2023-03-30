// Default params
function newUser(name,age,country){
    var name = name || 'Wilson';
    var age = age || 33;
    var country = country || 'PE';
    console.log(name,age,country);
}
newUser();
newUser('Jazmín',27,'PE');

// Default params Despues de ES6
function newAdmin(name='Wilson',age=33,country='PE'){
    console.log(name,age,country);
}
newAdmin(); //Llamamos la function
newAdmin('María',28,'MX');