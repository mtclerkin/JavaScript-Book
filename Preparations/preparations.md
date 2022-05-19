# JavaScript Preparations

### Style Guidelines 

  - Set your text editor to use space characters—not tabs—for indentation. The editor should also insert spaces if you press the "tab" key on your keyboard.

  - Set your text editor to use 2 spaces for indentation and when converting tab characters to spaces.

  - Try to limit lines to 80 characters. This limit isn't a universal preference, but it helps readability. Not all developers have massive screens or good eyesight.

  - JavaScript uses the character sequence // to mark the beginning of a comment. Such comments run through the end of the line. You can also use /* and */ for multiline comments and when you want to embed comments in the middle of a line:

  - When writing a code block or function body with curly braces, write the opening brace on the same line as the function name or conditional expression. Use a single space just before the opening brace:
  ```js 
          if (isOk()) {             
            // do something
          }
```
- Use spaces between operators and operands to make your code less cluttered and easier to read:
```js 
          let sum = x + 5;          
```
- Use semicolons to terminate each logical line of code unless the line ends with {, }, or :. 
```js
          let x = 3;
          let y = 5;

          if (x === y) {
            console.log("x is equal to y");
          } else {
            console.log("x is not equal to y");
          }
          ```
```
### Naming Guidelines 

  - Use camelCase formatting for most variable and function names. Such names begin with a lowercase letter. If the name contains multiple words, each subsequent word should begin with an uppercase letter. 
```js 
          let answerToUltimateQuestion = 42;     // initializing a variable
          function fourScoreAndSevenYearsAgo() { // defining a function
            // do something
          }
```

### CommandLine / Terminal

| Command   |      Description      |   
|----------|-------------|
| cd | change directory | 
| cd .. | navigate out of the current folder to the one above it | 
| ~ cd | change back to home directory    |   
| cd / | go to root directory    |  
| ls | list files and directories in curent directory    |   
| pwd | display path of the current directory|   
| touch | create a file|
| rm | remove a file or directory. WARNING: permanent! | 
| cp | copy a file or directory | 
| mv | move or rename a file or directory    |   
| echo | print text to STDOUT (standard output)     |   
| cat  | display contents of a file    |   
| more | display contents of a file, starting at top, letting user scroll down    |   
| less | display contents of a file in a more effective way   |   
| head | display the first part of a file    |   
| tail | display the last part of a file  |   
| man | display documentation about a command, including flag information    |   
| q | exit/quit    |   
| mkdir | make a directory    |   
| rmdir |  remov a directory   |   

### The Node REPL
- A REPL (read-eval-print-loop) is an environment where you can type commands/expressions in that language and get immediate results. Node.js comes with one such REPL, which you access with the node command:
```js 
          node
          //this command produces a minimalist > prompt: 
          >
          //The prompt tells you that you've entered the Node REPL. You can run JavaScript commands and see their outputs and return values from this prompt.
```
- A REPL is a great way to learn, practice, and test code. 
- When you want to exit the console and go back to the command line, press "control-c" twice, or press "control-d" once.

### Running JavaScript
##### Running JavaScript from Command Line
- To run the code from a file named example.js, run this command from the command line:

```js 
          node example.js
```
- To exit the program, use "control + c". This keystroke sends an abort signal to the running program

### Chrome Console 
- To access Chrome's console, right click on page and select "Developer Tools". From there, click on the "Console" tab to acces the Chrome console. 
- It is a REPL and works in a similar way to the Node REPL 

### Documentation
- Searching for Documentation Online: precede your search term with the word "mdn". For example, if you want to look up documentation about JavaScript arrays, search for "mdn javascript arrays". 
- Highly readable documentation can be found at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Official (albeit dry) documentation can be found at [ECMA International](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)


##### Methods
- Something a data type DOES
- In JavaScript, methods are functions that need a value that you can use to call the function. For instance, to call the toUpperCase() string method, you need a string to call it:

```js
          "test".toUpperCase() // returns TEST
```
##### Properties
- Something a data type HAS 
```js
          "hello".length // returns 5
```


 