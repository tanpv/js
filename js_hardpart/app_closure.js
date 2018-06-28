// closure : ability of function to access variable out side of it's self

// closure 1
/**
let name = "john";

function sayHi() {
  alert('hi, ' + name);
}

name = 'pete';

sayHi();
 */

// closure 2
/**
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

// only one lexical environment is created
let counter = makeCounter();

// all of these function call effect to same count variable
alert( counter() );
alert( counter() );
alert( counter() );
 */

// closure 3
/**
function makeCounter() {
  let count = 0;
  return function(){
    return count++;
  }
}

// 2 difference lexical environment are created
let counter1 = makeCounter();
let counter2 = makeCounter();

alert( counter1() );
alert( counter1() );

alert( counter2() );
 */

// iife
/**
(function() {
  let message = 'hello';

  alert(message);
})();
 */

