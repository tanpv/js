// rest parameter
/**
function sumAll(...args){
  let sum = 0;
  
  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) );
alert( sumAll(1,2) );
alert( sumAll(1,2,3));
 */

 /**
function showName(firstName, lastName, ...titles) {
  alert( firstName + " " + lastName );
  alert( titles[0] );
  alert( titles[1] );
  alert( titles.length );
}

showName('julius', 'caesar', 'consul', 'imperator');
 */


// arguments variable
/**
function showName() {
  alert( arguments.length )
}

showName('hello');
 */

// spread operator
/**
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
alert(merged);
 */

