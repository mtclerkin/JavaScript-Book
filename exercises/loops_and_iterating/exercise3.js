/*
Exercise 3:

The following code causes an infinite loop (a loop that never stops iterating). Why?

*/

let counter = 0;

while (counter === 0) {
  console.log(counter);
  counter += 1;

  // if (counter > 2) {
  //   break;
  // }
}