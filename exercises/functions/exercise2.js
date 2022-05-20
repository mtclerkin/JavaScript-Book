/*
Exercise 2: 

In the exercises for the previous chapter, you wrote a dynamic greeter 
program named greeter.js. Add a function to this program that solicits 
the user's first and last names in separate invocations (Input_Output Exercise 3); 
the function should return the appropriate name as a string. 
Use the return values to greet the user with their full name.

*/



function getName (question) {
  let readlineSync = require("readline-sync");
  let name = readlineSync.question(question); 
  return name; 
}

let yourFirstName = getName("What's your first name?\n");
let yourLastName = getName("What's your last name?\n");
console.log(`Good morning, ${yourFirstName} ${yourLastName}!`)