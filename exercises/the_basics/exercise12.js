/*
Exercise 12
What value does the following expression evaluate to?
'12' < '9'
*/

//This question is a bit tricky: the expression evaluates as true 
// since the operands are strings, not numbers. When you compare two strings, 
// JavaScript performs a character-by-character comparison going from left to right, 
// so on the first comparison, it determines that '1' < '9', so '12' must be less than '9'.'

// Had you used numbers instead, the expression would evaluate as false.