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