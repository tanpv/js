// access variable inside function
/**
let userName = 'John';

function showMessage(){
  userName = "Bob";
  let message = 'Hello, ' + userName;
  alert(message);
}

alert(userName);
showMessage();
alert(userName);
 */

// print function content
/**
function sayHi(){
  alert("hello");
}

alert(sayHi);
 */


/**
//  execute a function by variable
function sayHi(){
  alert('hello');
}

let func = sayHi;

func();
sayHi();
 */



/**
//  callback function v1
function ask(question, yes, no){
  if (confirm(question)){
    yes()
  }else{
    no()
  }
}

function showOk(){
  alert('you agreed.');
}

function showCancel(){
  alert('you canceled the execution.');
}

ask("Do you agree ?", showOk, showCancel)
 */

/**
//  arrow function
let sum1 = (a,b) => a+b;
alert(sum1(1,2));

let sum2 = (a,b) => {
  let result = a + b;
  return result;
};
alert(sum2(1,2));
 */