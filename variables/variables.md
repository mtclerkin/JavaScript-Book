# Variables
Variables are containers that hold information: their purpose is to label and store data in memory so that your program can use it.

## Variables and Variable Names 
A variable name must accurately and succinctly describe the data that the variable contains. 

## Declaring and Assigning variables  
- let
- var
- const

let 
- variable that can be reassigned a different value
```js
          let meal = "Tacos";
          console.log (meal) // returns Tacos
          meal = "Burritos"
          console.log(meal) // returns Burritos 
```
- does not have to be declared initially (initialized)
```js 
          let price;
          console.log(price); //returns undefined
          price = 350; 
          console.log (price) // returns 350
```

const
- variable that is constant and cannot be reassigned; must be assigned a value when declared. If not, a SyntaxError is returned. 

## Variable Scope   
A variable's scope determines where it is available in a program. The location where you declare a variable determines its scope. In JavaScript, variables declared with the let or const keywords have block scope. A block is a related set of JavaScript statements and expressions between a pair of opening and closing curly braces.
```js
          {
            // this is a block
            let foo = 42;
            console.log(foo);
          }

          if (answer === 'yes') {
            // this is a block
            console.log('yes');
          } else {
            // so is this
            console.log('nope');
          }
```

