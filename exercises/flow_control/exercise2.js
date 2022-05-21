/*
Exercise 2:
Write a function, evenOrOdd, that determines whether its argument 
is an even number. If it is, the function should log 'even' to the console; 
otherwise, it should log 'odd'. For now, assume that the argument is always an integer.
*/ 

// A number is even if you can divide it by two with no remainder. 
// For instance, 4 is even since 4 divided by 2 has no remainder. 
// Conversely, 3 is odd since 3 divided by 2 has a remainder of 1.

//You can use the % remainder operator shown 
//in The Basics chapter to determine the remainder.


function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd"); 
  }
}

evenOrOdd(9);