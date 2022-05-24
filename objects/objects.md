# Objects
complex data structures 

## What are objects?
Objects store a collection of **key-value pairs**: each item in the collection has a name that we call the **key** and an associated **value**. Contrast this with arrays, which associate values with ordered indexes. 

An object's **keys** are strings or symbols, but the **values** can be any type, including other objects. We can create an object using **object literal syntax**:
```js
let person = {
  name:    'Jane',
  age:     37,
  hobbies: ['photography', 'genealogy'],
};
```
This code shows an object named person that has 3 key-value pairs:

- The name of the person, a string, defined by the name key.
- The age of the person, a number, defined by the age key.
- A list of the person's hobbies, an array of strings, defined by the hobbies key.

Braces ({}) delimit the list of key-value pairs contained by the object. Each key-value pair ends with a comma (,), and each pair has a key, a colon (:), and a value. The comma that follows the last pair is optional. 

**Accessing Values** 
We can access a specific value in an object in two ways: 1) dot notation and 2) bracket notation.
```js
> person.name                 // dot notation
= 'Jane'

> person['age']               // bracket notation
= 37
```
With dot notation, we place a dot (.) and a key name after the variable that references the object. 

With bracket notation, we write the key as a quoted string and put it inside square brackets. Most developers prefer dot notation when they can use it. However, if you have a variable that contains a key's name, you must use bracket notation:

**Adding Key Value Pairs** 
```js
> person.height = '5 ft'

> person['gender'] = 'female'

> person
= { name: 'Jane', 
    age: 37, 
    hobbies: ['photography', 'genealogy'], 
    height: '5 ft', 
    gender: 'female' }
```
**Deleting Key Value Pairs** 
```js
> delete person.age
= true

> delete person['gender']
= true

> delete person['hobbies']
= true

> person
= { name: 'Jane', 
height: '5 ft' }
```

NOTE: Key-value pairs are also called object **properties** in JavaScript. We can also use "property" to refer to the key name; the meaning is typically clear from context. For instance, we can talk about the name property for the person object without mentioning the value.

**Misc**
We can change a property in a <code>const</code> object, but we can't change which object the <code>const</code> points to.
```js
> const MyObj = { foo: "bar", qux: "xyz" }
> MyObj.qux = "hey there"
> MyObj.pi = 3.1415
> MyObj
= { foo: 'bar', qux: 'hey there', pi: 3.1415 }

> MyObj = {} // Uncaught TypeError: Assignment to constant variable.
```
You can use Object.freeze with objects to freeze the property values of an object, just like you can with arrays:

```js
> const MyObj = Object.freeze({ foo: "bar", qux: "xyz" })
> MyObj.qux = "hey there"
> MyObj
= { foo: 'bar', qux: 'xyz' }
```

## Objects vs. Primitives 
Primitives include: 
- strings
- numbers
- booleans
- null
- undefined 
- BigInt
- symbols 

Objects include, but aren't limited to, the following types:
- Simple Objects
- Arrays
- Dates
- Functions

Objects are usually (but not always) mutable: you can add, remove, and change their various component values.

## Prototypes 
An interesting and handy feature of JavaScript objects is that they can inherit from other objects. When an object a inherits from object b, we say that b is the prototype of a. The practical implication is that a now has access to properties defined on b even though it doesn't define those properties itself.

The static method <code>Object.create</code> provides a simple way to create a new object that inherits from an existing object:
```js
let bob = { 
  name: 'Bob', 
  age: 22 
};
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // => 'Bob'
```
<code>Object.create</code> creates a new object and sets the prototype for that object to the object passed in as an argument. Our example creates a new object named <code>studentBob</code> that uses <code>bob</code> as its prototype. That is, it creates an inheritance relationship from studentBob, the child object, to bob, the parent object.

## Iteration 
**for/in loop**
The <code>for/in</code> loop behaves similarly to an ordinary <code>for</code> loop. The syntax and semantics are easier to understand since you don't need an initializer, ending condition, or increment clause. Instead, the loop iterates over all the keys in the object. In each iteration, it assigns the key to a variable which you then use to access the object's values:
```js
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let property in person) {
  console.log(person[property]);
}                             // => Bob
                              //    30
                              //    6 ft
```

**Object.keys**
The <code>Object.keys</code> static method returns an object's keys as an array. You can iterate over that array using any technique that works for arrays:
```js
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

let personKeys = Object.keys(person);
console.log(personKeys);          // => ['name', 'age', 'height']
personKeys.forEach(key => {
  console.log(person[key])
});                               // => Bob
                                  //    30
                                  //    6 ft
```

## Common Operations  
Most JavaScript objects don't have an abundance of methods that you can apply in your day to day usage (unlike arrays). 

### <code> Object.keys </code> 
The Object.keys static method returns an object's keys as an array. 

```js
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};
let personKeys = Object.keys(person);
console.log(personKeys);          // => ['name', 'age', 'height']
```

### <code> Object.values </code>
This static method extracts the values from every own property in an object to an array:

NOTE: Be careful: remember that you can't predict the order of the values in the returned array.

```js
let person = { 
  name: 'Bob', 
  age: 30, 
  height: '6ft' 
};
let personValues = Object.values(person);
console.log(personValues); // => [ 'Bob', 30, '6ft' ]
```
### <code>Object.entries</code>
While <code>Object.keys</code> and <code>Object.values</code> return the keys and values of an object, respectively, the <code>Object.entries</code> static method returns an array of nested arrays. Each nested array has two elements: one of the object's keys and its corresponding value:
```js
let person = { 
  name: 'Bob', 
  age: 30, 
  height: '6ft' 
};
console.log(Object.entries(person)); // => [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]
```
### <code>Object.assign</code>
The Object.assign static method allows you to merge two or more objects, i.e., combine the key-value pairs into a single object. 

```js
> let objA = { a: 'foo' }
= undefined

> let objB = { b: 'bar' }
= undefined

> Object.assign(objA, objB)
= { a: 'foo', b: 'bar' }
```
<code>Object.assign</code> mutates the first object. In the above example, the properties from the <code>objB</code> object get added to the <code>objA</code> object, altering <code>objA</code> permanently in the process:

```js
> objA
= { a: 'foo', b: 'bar' }

> objB
= { b: 'bar' }
``` 
NOTE: If you need to create a new object, use an empty object as Object.assign's first argument. Note that Object.assign can take more than two arguments:
```js
> objA = { a: 'foo' }
= undefined

> objB = { b: 'bar' }
= undefined

> Object.assign({}, objA, objB)
= { a: 'foo', b: 'bar' }

> objA
= { a: 'foo' }

> objB
= { b: 'bar' }
```
