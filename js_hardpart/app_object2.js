// prototype
/**
let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

// so rabbit has eats property
rabbit.__proto__ = animal;

alert( rabbit.eats );
alert( rabbit.jumps );
 */

/**
let animal = {
    eats: true,
    walk() {
        alert('animal walk');
    }
};

let rabbit = {
    jumps: true,
    // so rabbit will inherit eats and walk()
    __proto__: animal
};

 */

 

