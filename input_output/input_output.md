# Input/Output
### Command Line Output
console.log is a built-in function that takes any JavaScript value, regardless of type, and logs it to the console. 

### Command Line Output
Node.js has an API called readline that lets JavaScript programs read input from the command line. It's quite complicated, so for now, we can use a simplified version of the readline library called readline-sync

To install readline-sync, you must first create a package.json file in the current directory. Use the ls command to see if there is one already:

```js 
          $ ls package.json
          package.json
```

If an error occurs, run the **npm init -y** command

Once you have a package.json file, you can install readline-sync as follows:
**npm install readline-sync --save**

#### EXAMPLE: Greet the User By Name
```js 
          let rlSync = require('readline-sync');
          let name = rlSync.question("What's your name?\n");
          console.log(`Good Morning, ${name}!`);
```

In the code above, 
- Line 1 uses Node's built-in require function to import readline-sync into your program. It returns the library as an object, which we assign to the rlSync variable.

- In line 2, we use rlSync to call the question method. This method displays its string argument, then waits for the user to respond. When the user types some text and presses Return, it returns that text to the program. Here, we assign that text to the variable name and use it to display a personalized greeting.

#### EXAMPLE: Add Two Numbers Together 
```js 
          let rlSync = require('readline-sync');

          let number1 = rlSync.question('Enter the first number\n');
          let number2 = rlSync.question('Enter the second number\n');
          let sum = Number(number1) + Number(number2);

          console.log(`The numbers ${number1} and ${number2} add to ${sum}`);
```

### Input in the Browser
```js
          <!DOCTYPE html>
          <html>
          <head>
            <title>Testing Prompt</title>
          </head>
          <body>
            <script src="personalized_greeting_browser.js"></script>
          </body>
          </html>

          let name = prompt("What's your name?");
          console.log(`Good Morning, ${name}`);
```