/*
Exercise 1: 

What does this code log to the console? Does executing the foo function 
affect the output? Why or why not?
*/
let bar = 1;
function foo() {
   bar = 2;
}

foo();
console.log(bar);

//Logs 1 

let back = 1;
function foo() {
  back = 2;
}

foo();
console.log(back);

//Logs 2