/*
Exercise 2
Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:
1. thousands place is 4
2. hundreds place is 9
3. tens place is 3
4. ones place is 6

HINT 1: Use number % 10 to determine the rightmost digit. Then use that value and % again to get the tens digit. 
Repeat until you have all 4 digits.

HINT 2: Once you have the ones digit from the previous hint, 
subtract it from the current number, then divide the result by 10. Repeat hint 1 to get the next digit.


*/

let number = 4936
let ones = number % 10
//6

number = (number - ones) / 10
//493

let tens = number % 10
//3 

number = (number = tens) / 10
//49

let hundreds = number % 10
//9

let thousands = (number - hundreds) / 10
//4 