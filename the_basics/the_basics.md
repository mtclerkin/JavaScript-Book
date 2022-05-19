# JavaScript Basics
## Data Types
**Primitive Data Types** 
1. String
2.  Number
3. Boolean
4. Undefined
5. Null  

**Not Primitive**
- Object Type 

Data type values can be represented by literals. A literal is any notation that lets you represent a fixed value in source code. For instance, all of the following are literals in JavaScript:
```js 
          'Hello, world!'     // string literal
          3.141528            // numeric literal
          true                // boolean literal
          { a: 1, b: 2 }      // object literal
          [ 1, 2, 3 ]         // array literal
          undefined           // undefined literal
```
### 1. Strings
A string is a list of characters in a specific sequence (ex: names, messages, descriptions). 
```js
          > "He said, 'Hi there!'"    // with double quotes
          = "He said, 'Hi there!'"

          > 'He said, \'Hi there!\''  // with single quotes and escaping
          = "He said, 'Hi there!'"
```

Template literals use backticks (`) and enable an operation called string interpolation. 

```js
          > `5 plus 5 equals ${5 + 5}`
          = '5 plus 5 equals 10'
```

### 2. Numbers 

### 3. Booleans
Boolean values represent an "on" or "off" state. For example, if you want to represent the state of a light switch in your application, you can use boolean values. There are two boolean literal values: true and false:
```js
          > let toggleOn = true
          > let sessionActive = false
```
Boolean values have a starring role when working with comparison operators. Comparisons check whether a value is equal to (===), less than (<), or greater than (>) another value. They return a boolean result (true or false).

### 4. Undefined 
When a variable is not defined, its value is given by undefined. We can describe undefined as representing the absence of a value.

The console.log function is an example of a function that returns undefined:

### 5. Null 
The intentional absence of a value. The chief difference between null and undefined is that you must use null explicitly if you want to use it; undefined can arise implicitly

## Operators
| Operator   |  Function  | Example |  
|---|-------------| -------------|
| + | add | 38 + 4 // returns 42 |
| - | subtract | 44 - 2 // returns 42|
| * | multiply  |7 * 6 // returns 42 |
| / | divide | 16 / 2.5 // returns 6.4|
| % | modulo or remainder operator | 16 % 4 //returns 0; 16 % 5 // returns 1
| === | compares 2 operands for equality |  42 === 42 //returns true; "foo" = "FOO" //returns false 
| + |  concatanates two strings | "hello" + " there" // returns "hello there"

## Explicit Coercion 

### Strings to Numbers
The Number function coerces a string to a number:
```js
          > Number('1')
          = 1
```
The parseInt function also coerces strings to numbers: 
```js
          > parseInt('12xyz')
          = 12
          > parseInt('3.1415')
          = 3
```
### Numbers to Strings
The String function coerces a number to a string:
```js
          > String(20)
          = '20'
```
## Data Structures 
The two most common data structures, or complex data types, that JavaScript programmers use are arrays and objects. 

### Arrays 
Javascript's way of making lists of information. Arrays can contain strings, numbers, booleans, or any other data type
```js
          > [1, 2, 3, 4, 5]
```
This array contains the integers between 1 and 5. You can access an array element by placing its index inside brackets []
```js
          > [1, 2, 3, 4, 5][0]
          = 1
```
Arrays can also be written in a multi-line format, which is especially useful for larger arrays or arrays with long values:
```js 
          [
            "Eric Idle",
            "John Cleese",
            "Terry Gilliam",
            "Graham Chapman",
            "Michael Palin",
            "Terry Jones",
          ]
```
Arrays Summary:
- The order of the elements is significant.
- Use index numbers to retrieve array elements.
- Index numbers are non-negative integers starting from 0.

### Objects 
A JavaScript object is a collection of key-value pairs (in Python, these are called dictionaries)

You can create objects using object literals, which have zero or more key-value pairs separated by commas all embedded within curly braces ({}). A key-value pair associates a key and a given value. Each pair consists of a key, in the form of a string, and a value of any type. Key-value pairs in object literals use the key followed by a colon (:) and then the value.
```js
          > { dog: 'barks' }
```
object name = dog; value = barks

Objects can have multiple elements. All we have to do is separate the key-value pairs with commas. However, unlike arrays, these values aren't in any specific order.
```js
          > { dog: 'barks', cat: 'meows', pig: 'oinks' }
```
We can retrieve a value by its key.
```js
          > ({ dog: 'barks', cat: 'meows', pig: 'oinks' })['cat']
          = 'meows'
```
Objects can also be written in a multi-line format:
```js
          {
            title: "Monty Python's Flying Circus",
            cast: [
              "Eric Idle",
              "John Cleese",
              "Terry Gilliam",
            ],
            firstSeason: 1969,
            lastSeason: 1974,
          }
```

## Expressions and Return Values
### Printing (logging) vs Returning values
LOGGING: The term log is a synonym for printing or displaying something on the console.When we invoke the console.log method, we're telling JavaScript to write something to the console. In Node, that is your screen; in your browser, it's the Console in your Developer Tools application. 

RETURNING: Allows functions to produce an output 

## Statements
Any syntactic unit of code that expresses an action for the computer to perform.

The statement itself is not an expression -- its value cannot be captured and reused later in your code.

An example of a JavaScript statement is the variable declaration:
```js 
          > let foo = 3;
```
The value 3 to the right of the = is an expression. If you later decide to print the value of foo, then foo in that code is also an expression:

The key difference between a statement and an expression is that you can't capture a value from a statement. 