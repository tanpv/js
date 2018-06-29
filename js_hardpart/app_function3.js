// caching 1
/**
function slow(x) {
  alert(`called with ${x}`);
  return x;
}

// input parameter is a function, function is a object
function cachingDecorator(func){

  // cache variable inside lexical environment of return function
  // cache is map between a input key and a result
  let cache = new Map();

  return function(x) {

    // could access variable inside lexical environment
    if(cache.has(x)){
      return cache.get(x);
    }

    // call the function want to caching
    let result = func(x);

    // set return to cache variable
    cache.set(x, result);

    return result;
  };
}

// slow is function that has ability to access cache
slow = cachingDecorator(slow);

alert( slow(1) );
alert( 'again: ' + slow(1) );
 */

// func.call set this to object
/**
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    alert("called with " + x);
    return x * this.someMethod();
  }
};

function cachingDecorator(func) {
  let cache = new Map();  //lexical environment for below function
  return function(x) {
    if (cache.has(x)) {   //see cache because cache inside lexical environment
      return cache.get(x);
    }

    // this will be set to object which invoke this function
    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}

// this now is set to workder - the most close class
worker.slow = cachingDecorator(worker.slow);

// worker is set to this because worker execute slow function
alert( worker.slow(2) );
alert( worker.slow(2) );
 */

// apply function
/**
function say(time, phrase) {
  alert(`[${time}] ${this.name}: ${phrase}`);
}

let user = {name: "john"};

let messageData = ['10:00', 'hello'];

// user become the this for say function, or context
say.apply(user, messageData);
 */

//  using bind to explixit specify this
/**
let user = {
  firstName: "john"
};

function func() {
  alert(this.firstName)
}

// replace this keywork with user
let funcUser = func.bind(user);
// execute
funcUser();
 */