# Functions
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



