/*
Exercise 3:
Let's improve our previous implementation of evenOrOdd. 
Add a validation check to ensure that the argument is an integer. 
If it isn't, the function should issue an error message and return.
*/

// HINT: You can use Number.isInteger(value) 
// to determine whether a numeric value is an integer. 
// It returns true if the value is an integer, false otherwise.


function evenOrOdd(num) {
  if (Number.isInteger(num) && num % 2 === 0) {
    console.log("even");
  } else if (Number.isInteger(num) && num % 2 === 1) {
    console.log("odd");
  } else {
    console.log("That's not an integer. Please try again.")
  }
}

evenOrOdd("hello");

//OR 

function evenOrOdd(num) {
  if(Number.isInteger(num) === false) {
    console.log("I'm sorry. That's not an integer. Please try again."); 
    return;
  }
  if(num % 2 === 0) {
    console.log("even!");
  } else {
    console.log("odd.");
  }
}

evenOrOdd(9)