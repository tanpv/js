/**
function makeUser(name, age){
  return {
    name: name,
    age: age
  };
}

let user = makeUser("John", 30);
alert(user.name);
 */

 /**
// walk over all keys of an object
let user = {
  name: "John",
  age: 30,
  isAdmin:true
};

for(let key in user){
  alert(`${key} : ${user[key]}`);
}
 */

/**
// this method
let user = {
  name: "John",
  age: 30,

  sayHi(){
    alert(this.name);
  }
}

user.sayHi();
 */


/**
// The value of "this" is defined at run-time.
let user = {name: "John"};
let admin = {name: "Admin"};

function sayHi() {
  alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();
 */




