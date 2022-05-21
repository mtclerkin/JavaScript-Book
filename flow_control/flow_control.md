# Flow Control
## Conditionals 
A conditional is a fork (or multiple forks) in the road. Your data arrives at a conditional, which then tells the data where to go. The simplest conditionals use a combination of if statements with comparison and logical operators (<, >, <=, >=, ==, ===, !=, !==, &&, ||) to direct traffic. They use the keywords if and else.
```js
let a = 3 

if (a === '3') {
  console.log("a is 3");
} else if (a === '4') {
  console.log("a is 4");
} else {
  console.log("a is neither 3, nor 4");
}
```
**Example 1:**
The simplest if statement: it has a single condition (x === 3) and a single clause—a block, statement, or expression in this context—that executes when the condition is true. When the condition is false, execution resumes with the first statement or expression after the if statement without running the code in the clause.
```js
if (x === 3) {                          
  console.log("x is 3");
}
```

**Example 2:**
Demonstrates that you can handle both true and false conditions in the same if statement by using an else clause. When the condition is true, the code in the if clause (the first block) runs; when it's false, the code in the else clause runs. It's important to understand that the else clause is not a separate statement: it's part of the if statement.
```js
if (x === 3) {                          
  console.log("x is 3");
} else {
  console.log("x is NOT 3");
}
```

**Example 3:**
```js
if (x === 3) {                         
  console.log("x is 3");
} else if (x === 4) {
  console.log("x is 4");
} else {
  console.log('x is NOT 3 or 4');
}
```

## Comparison Operators
***Comparison operators return a boolean value:*** <code>true</code> **or** <code>false</code>.
| Comparison Operator   |  Name  | Example |  
|---|-------------| -------------|
| === | strict equality operator or identity operator | 5 === 5 // returns true, but 5 === "5" returns false |
| !== | strict inequality operator | 5 !== 5 // returns false, but 5 !== "5" //returns true|
| < | less than operator |4 < 5 // returns true; 5 <4 // returns false |
| > | greater than operator | 4 > 5 // returns false; 5 > 4 // returns true|
| <= | less than or equal to operator | 4 <= 5 // returns true
| >= | greater than or equal to operator |  5 >= 5 // returns true 

## Logical Operators
| Logical Operator   |  Name  | Example |  
|---|-------------| -------------|
| ! | not operator | !true //returns false, !(4===4)//returns false, !false //returns true  |
| && | and operator |4 === 4 && 3 === 5 //returns false, 4 === 4 && 5 ==== 5// returns true|
| ll | or operator | (4 === 4) ll (5 === 6) // returns true, (4 === 3) ll (5 === 6) // returns false  |

***&& and || don't always return true or false, but they do when they operate on boolean values. ***

## Short Circuits
The && and || operators both use a mechanism called short circuit evaluation to evaluate their operands. Consider these two expressions:
```js
> isRed(item) && isPortable(item)
> isGreen(item) || hasWheels(item)
```
The first expression returns true when item is both red and portable. If either condition is false, then the overall result must be false. Thus, if the program determines that item is not red, it doesn't have to check whether it is portable. JavaScript short-circuits the entire expression by terminating evaluation as soon as it determines that item isn't red. It doesn't need to call isPortable() since it already knows that the entire expression must be false.

Similarly, the second expression returns true when item is either green or has wheels. When either condition is true, the overall result must be true. Thus, if the program determines that item is green, it doesn't have to check whether it has wheels. Again, JavaScript short-circuits the entire expression once it determines that item is green. The entire expression must be true.

## Truthiness 
Every if statement has an expression that evaluates as <code>true</code> or <code>false</code>. However, the expression doesn't have to be one of the boolean values, true and false. JavaScript can coerce any value to a boolean value, and that's what it does in conditional contexts like the if statement.

Falsy values: false, 0 (0, -0, 0n ), empty strings (" "), null, undefined, Nan (not a #);
Everything else evaluates as true. 

The && and || logical operators use short-circuit evaluation. These operators work with truthy and falsy values too, and they can also return truthy values instead of boolean values. When using && and ||, the return value is always the value of the operand evaluated last:
```js
> 3 && 'foo'  // last evaluated operand is 'foo' (true and true)
= 'foo'

> 'foo' && 3  // last evaluated operand is 3 (true and true)
= 3

> 0 && 'foo'  // last evaluated operand is 0 (false and true)
= 0

> 'foo' && 0  // last evaluated operand is 0 (true and false)
= 0
> 3 || 'foo'  // last evaluated operand is 3 (true and true)
= 3

> 'foo' || 3  // last evaluated operand is 'foo' (true and true)
= 'foo'

> 0 || 'foo'  // last evaluated operand is 'foo' (false and true)
= 'foo'

> 'foo' || 0  // last evaluated operand is 'foo' (true and false)
= 'foo'

> '' || 0     // last evaluated operand is 0 (false and false)
= 0
```
## Operator Precedence

JavaScript has a set of precedence rules it uses to evaluate expressions that use multiple operators and sub-expressions. The following is a list of the comparison operations from the highest precedence (top) to lowest (bottom).
- <=, <, >, >= - Comparison
- ===, !==, ==, != - Equality
- && - Logical AND
- || - Logical OR

We can use parentheses to override the precedence: sub-expressions in parentheses get evaluated before un-parenthesized expressions

```js
if ((x || y) && z) {
  // do something
}
```
## The Ternary Operator 
The ternary operator is a quick and easy way to write a short, concise, and simple if/else conditional. It uses a combination of the ? and : symbols and takes 3 operands (hence, the name "ternary"):

How does this work? JavaScript first evaluates the first operand (the comparisons: 1 === 1 and 1 ===0 ). If it has a truthy result, JavaScript evaluates the second operand (this is true) and returns its value. Otherwise, it evaluates the third operand (this is not true) and returns its value.


```js
> 1 === 1 ? 'this is true' : 'this is not true'
= 'this is true'

> 1 === 0 ? "this is true" : "this is not true"
= 'this is not true'
 ```

 **The chief advantage of ternary operators is that we can treat it as a value and assign it to a variable, pass it an argument, etcc.**

```js
> let message = true ? 'this is true' : 'this is not true'
= undefined

> message
= 'this is true'

> console.log(false ? 'this is true' : 'this is not true')
this is not true
= undefined
```
## The Switch Statement 
A <code>switch</code> statement is similar to an if statement, but it has a different interface. It compares a single value against multiple values for strict equality (as with the === operator), whereas <code>if</code> can test multiple expressions with any condition.

<code>switch</code> statements use the reserved words <code>switch</code>, <code>case</code>, <code>default</code>, and <code>break</code>.

The <code>break</code> statement in each case is crucial. Without a <code>break</code>, execution "falls through" to the next case clause.



switch vs else/if example:
```js
let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5, nor 6');
    break;
} // => a is 5

let a = 5;

if (a === 5) {
  console.log('a is 5');
} else if (a === 6) {
  console.log('a is 6');
} else {
  console.log('a is neither 5, nor 6');
} // => a is 5

```
