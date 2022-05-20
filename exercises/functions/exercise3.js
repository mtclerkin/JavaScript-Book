/*
Exercise 3: 

Write a program that uses a multiply function to multiply two numbers 
and returns the result. Ask the user to enter the two numbers, 
then output the numbers and result as a simple equation.

$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566
*/

function getNumber (prompt) {
  let readlineSync = require("readline-sync");
  let number = readlineSync.question(prompt); 
  return number; 
}

function multiply (num1, num2) {
  return num1 * num2 
}

let num1 = getNumber("Enter the first number: ");
let num2 = getNumber("Enter the second number: ");
let sum = num1 * num2 
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
