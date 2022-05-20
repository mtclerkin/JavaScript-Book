# Functions
## Using Functions
Functions are called by typing their name and providing some optional values (arguments) . In the function below, the function definition includes (words) after the function name. This syntax tells us that we should supply (/pass) a single argument to the function when we call it. Arguments let you pass data from outside the function's scope into the function so it can access the data. If the function definition doesn't need access to outside data, you don't need any arguments.

In the definition of a function, the names between parentheses are called parameters. The arguments are the values of those parameters.

Function names and parameters are both considered variable names in JavaScript. Parameters, in particular, are local variables; they are only defined locally, within the body of the function.

Paramater = words; Argument = hello, hi, how do you do? 


```js 
          function say(words) {
            console.log(words);
          }
          say("hello"); //logs hello
          say("hi"); //logs hi
          say("how do you do"); // logs how do you do
```

## Return Values 
Return allows functions to produce an output

All JavaScript function calls evaluate to a value. By default, that value is undefined; this is the implicit return value of most JavaScript functions. However, when you use a return statement, you can return a specific value from a function. This is an explicit return value. Outside of the function, there is no distinction between implicit and explicit return values, but it's important to remember that all functions return something unless they raise an exception, even if they don't execute a return statement.

```js
          function add(a, b) {
            return a + b;
          }

          add(2, 3); // returns 5
```
When you run the program above, it doesn't log anything since add doesn't call console.log or any other output methods. However, the function does return a value: 5. When JavaScript encounters the return statement, it evaluates the expression, terminates the function, and returns the expression's value to the location where we called it.

Functions that always return a boolean value, i.e., true or false, are called **predicates**. 

## Default Parameters  
When you define a function, you sometimes want to structure it so that you can call it without an argument:
```js
          function say(words = "hello") {
          console.log(words + "!");
        }

        say("Howdy"); // => Howdy!
        say();        // => hello!
```
Say()—without arguments—logs "hello!" to the console. Since we've provided a default value for words, we can call our function without arguments.

## Nested Functions  
```js 
          function foo() {
            function bar() {
              console.log("BAR");
            }

            bar(); // => BAR
          }
          foo(); // does not log anything to the console 
```
## Function and Scope
Global Variables:
- available throughout a program
- can be useful in some scenarios (ex: application configuration), but most developers discouraged their use because they can lead to bugs 
Local Variables: 
- confined to a function or a block 
- anything declaed inside a function or block is a local variable (everything else is global)
- in general, using local variables is best practice. 
Block Scoping
- occurs when you use let or const inside a block and confines the variable's scope to that block.


## Method Invocation
Method invocation occurs when you prepend a variable name or value followed by a period (.) to a function invocation, e.g. 'xyzzy'.toUpperCase(). We call such functions methods. The method toUpperCase returns a modified version of the string 'xyzzy' ('XYZZY'). 


## Mutating the Caller/ Methods Mutations 
Mutating vs NonMutating (or Destructive vs NonDestructive)

toUpperCase() method = Nonmutating (leaves the caller unchanged) 
```js 
          let name = "Pete Hanson";
          console.log(name.toUpperCase()); // => 'PETE HANSON'
          console.log(name);               // => 'Pete Hanson'
```

pop() = Mutating (changes the caller)
```js
          let oddNumbers = [1, 3, 5, 7, 9];
          oddNumbers.pop();
          console.log(oddNumbers); // => [1, 3, 5, 7]
```

***Mutation is only a concern when dealing with arrays and objects. Primitive values like numbers, strings, and booleans are IMMUTABLE. Operations on immutable values always return new values. Operations on mutable values (arrays and objects) may or may not return a new value and may or may not mutate data.***

## Combining Functions  

``` js
          function add(a, b) {
            return a + b;
          }
          function subtract(a, b) {
            return a - b;
          }
          function times(num1, num2) {
            return num1 * num2;
          }

          console.log(times(add(20, 45), subtract(80, 10))); // => 4550
          // 4550 == ((20 + 45) * (80 - 10))
```

## Three Ways to Define a Function

1. Function Declaration
```js 
          function functionName(zeroOrMoreArguments...) {
            // function body
          }
```
```js 
          function greetPeople() {
            console.log("Good Morning!");

          greetPeople(); 
}
```
2. Function Expression
Looks very similar to function declaration; however, we are saving it to a variable .
```js 
          let greetPeople = function () {
            console.log("Good Morning!");
          };

          greetPeople();
```
3. Arrow Function 
```js
          let greetPeople = () => console.log("Good Morning!");
          greetPeople();
```
```js
          let add = (a, b) => a + b;
```
```js
          let initGame = () => ({
            level: 1,
            score: 0
          }); 

          let game = initGame(); 

          console.log ('Level: ' + game.level);
          console.log("Score: " + game.score);
```
