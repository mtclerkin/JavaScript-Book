/*
Exercise 8:
Write a function that logs whether a number is between 0 and 50 (inclusive), 
between 51 and 100 (inclusive), greater than 100, or less than 0.
*/

function numberRange(num) {
  if (num < 0 ) {
    console.log(`${num} is less than 0.`);
  } else if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50.`)
  } else if (num > 50 && num <=100) {
    console.log(`${num} is between 51 and 100.`)
  } else {
    console.log(`${num} is greater than 100.`)
  }
}

numberRange(50);
numberRange(100);
numberRange(0);
numberRange(-2);
numberRange(150);

//OR 

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}
