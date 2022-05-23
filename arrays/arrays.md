# Arrays
An <code>array</code> is an ordered list of elements; each element has a value of any type. You can define an array by placing a list of values between brackets ([]):
```js
> let myArray = [2, 'Pete', 2.99, 'another string']
```
Arrays can be heterogeneous; myArray has both number and string values. Arrays can have anything in them, including objects and even other arrays.

Each element in an array has a unique index number that gives the position of the element in the array. Thus, we can say that arrays are indexed lists as well as ordered lists.
```js
> myArray[0]
= 2
```
To get the length of an array:
```js
> myArray[myArray.length - 1]
= 'another string'
```
## Modifying Arrays
**Replacing with []**
To replace an element of an array, use brackets ([]) with the assignment operator:
```js
> let array = [1, 2, 3]
> array[1] = 4
= 4

> array
= [ 1, 4, 3 ]
```
**Adding with []**
```js
> array[array.length] = 10
= 10

> array
= [ 1, 4, 3, 10 ]
```

**Freezing Const Arrays**
```js
> const MyArray = Object.freeze([1, 2, 3])
> MyArray[1] = 5
> MyArray
= [1, 2, 3]
```

**Adding with <code>push</code>**
```js
> array.push('a')
= 5               // the new length of the array

> array
= [ 1, 4, 3, 10, 'a' ]

> array.push(null, 'xyz')
= 7

> array
= [ 1, 4, 3, 10, 'a', null, 'xyz' ]
```
NOTE: The push method appends its arguments to the caller (the array), which mutates the caller. It then returns the array's new length. Don't forget that methods and functions perform actions and return values. You must be careful to distinguish between these two things. push appends elements to the end of the caller array, but it returns the array's updated length. Note that it does not return the modified array! New JavaScript programmers often get confused over this difference and spend hours puzzling over why a function isn't returning the value they expect. Check the documentation if you have any doubt.

**Adding with <code>concat</code>**
```js
> array.concat(42, 'abc')
= [ 1, 4, 3, 10, 'a', null, 'xyz', 42, 'abc' ]

> array
= [ 1, 4, 3, 10, 'a', null, 'xyz' ]
```
NOTE: The concat method is similar to push, but it doesn't mutate the caller. It concatenates two arrays and returns a brand new array that contains all the elements from the original array followed by all of the arguments passed to it. Can save new array to variable to call it again. 

**Removing with <code>pop</code>**
The inverse of <code>push</code> is <code>pop</code>. While push adds an element to the end of the array, pop removes and returns the last element of the array. <code>pop</code> mutates the caller. 
```js
> array.pop()
= 'xyz'            // removed element value

> array
= [ 1, 4, 3, 10, 'a', null ]
```
**Removing with <code>splice</code>**
```js
> array = [ 1, 4, 3, 10, 'a', null ]
> array.splice(3, 2)
[ 10, 'a' ]

> array
= [ 1, 4, 3, null ]
```
In this example, we delete 2 elements starting at index position 3. <code>splice</code> mutates the original array and returns a new array that contains the deleted elements.

## Iteration Methods
### Iterating with <code>forEach</code>
It provides a simple way to iterate over arrays.

To use <code>forEach</code>, you need a callback function that you pass to <code>forEach</code> as an argument. A callback function is a function that you pass to another function as an argument. The called function invokes the callback function when it runs. The <code>forEach</code> method invokes its callback once for each element, passing it the element's value as an argument. <code>forEach</code> always returns undefined.
```js
let array = [1, 2, 3];
array.forEach(function(num) {
  console.log(num); // on first iteration  => 1
                    // on second iteration => 2
                    // on third iteration  => 3
}); // returns `undefined`
```
or, with arrow function:
```js
let array = [1, 2, 3];
array.forEach(num => console.log(num));
```
### Transforming arrays with <code>map</code>
<code>forEach</code> works well when you want to use the values of an array's elements. If you want to create a new array whose values depend on the original contents of the array (ex: create a new array that contains the squares of all the numbers in the calling array), <code>map</code> is better. 
```js
> let numbers = [1, 2, 3, 4]
> let squares = numbers.map(num => num * num);
> squares
= [ 1, 4, 9, 16 ]

> squares = numbers.map(num => num * num);
= [ 1, 4, 9, 16 ]
```
<code>forEach</code> and <code>map</code> are important methods, but they can confuse beginners. The main thing to remember is that <code>forEach</code> performs simple iteration and returns undefined, while <code>map</code> transforms an array's elements and returns a new array with the transformed values.

### Filtering arrays with <code>filter</code>
Filter returns a new array that includes all elements from the calling array for which the callback returns a truthy value: 
```js
> let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
> numbers.filter(num => num > 4)
= [ 5, 6, 7, 8, 9, 10 ]

> numbers
= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]
```
<code>filter</code> iterates over the elements of the array. During each iteration, it invokes the callback function, using the value of the current element as an argument. If the callback returns a truthy value, <code>filter</code> appends the element's value to a new array. Otherwise, it ignores the element's value and does nothing. When <code>filter</code> finishes iterating, it returns the array of selected elements: the elements for which the callback returned a truthy value. In our example, <code>filter</code> selects all of the elements with a value greater than 4.

NOTE: filter doesn't mutate the caller! 

### Building new values arrays from array with <code>reduce</code>
The <code>reduce</code> method effectively reduces the contents of an array to a single value. It is, perhaps, one of the hardest array iteration methods to understand, but it is also one of the most fundamental. You can build <code>forEach</code>, <code>map</code>, and <code>filter</code> with <code>reduce</code>, as well as a number of other iterative methods defined for Arrays.

<code>reduce</code> takes two arguments: a callback function and a value that initializes something called the **accumulator**. In its simplest form, the callback function takes two arguments: the current value of the accumulator and an element from the array. It returns a value that will be used as the accumulator in the next invocation of the callback. That sounds more complicated than it is, so let's take a look at two simple uses of <code>reduce</code>:
```js
> let arr = [2, 3, 5, 7]
> arr.reduce((accumulator, element) => accumulator + element, 0)
= 17

> arr.reduce((accumulator, element) => accumulator * element, 1)
= 210
```
```js
> let strings = ['a', 'b', 'c', 'd']
> strings.reduce((accumulator, element) => {
...   return accumulator + element.toUpperCase()
... }, '');
= 'ABCD'
```
NOTE: <code>reduce</code> does not mutate the caller 

## Notes About Arrays
- Indexes start at 0.
- The <code>length</code> property always returns a number that is one greater than the greatest used index position of the array. For instance, if an element exists at index position 124 and there are no other elements with greater index values, then the array's length is 125.
- Arrays are objects. One side effect of this is that the typeof operator doesn't return 'array' when applied to an array. If need to detect whether a variable references an array, you need to use Array.isArray instead:
```js
> let arr = [1, 2, 3]
> Array.isArray(arr)
= true
```
- If you change an array's length property to a new, smaller value, the array gets truncated; JavaScript removes all elements beyond the new final element.
- If you change an array's length property to a new, larger value, the array expands to the new size. The new elements do not get initialized, which leads to some strange behavior:

## Nested Arrays

Array elements can contain anything, including other arrays. You can create arrays with arrays inside them and even arrays inside those inner arrays:
```js
> let teams = [['Joe', 'Jennifer'], ['Frank', 'Molly'], ['Dan', 'Sarah']]
```
You can now find the teams by index:
```js
> teams[2]
= [ 'Dan', 'Sarah' ]
```
If you want to retrieve the second element of teams[2], you can append [1] to the expression:
```js
> teams[2][1]
= 'Sarah'
```
## Array Equality
JavaScript treats two arrays as equal only when they are the same array: they must occupy the same spot in memory

Thus, 
```js
> [1, 2, 3] === [1, 2, 3]
= false
``` 
and 
```js
> let a = [1, 2, 3]
> let b = a
> a === b
```
## Other Array Methods
**<code>includes</code>**
The <code>includes</code> method determines whether an array includes a given element:
```js
> let a = [1, 2, 3, 4, 5]
> a.includes(2)
= true

> a.includes(10)
= false
```
**<code>sort</code>**
The <code>sort</code> method is a handy way to rearrange the elements of an array in sequence. It returns a sorted array.
```js
> let a = ["e", "c", "h", "b", "d", "a"]
> a.sort()
= [ 'a', 'b', 'c', 'd', 'e', 'h' ]
```
NOTE: sort mutates the caller 

**<code>slice</code>**
The <code>slice</code> method extracts and returns a portion of the array. It takes two optional arguments. The first is the index at which extraction begins, while the second is where extraction ends:
```js
> let fruits = ['mango', 'orange', 'banana', 'pear', 'apple']
> fruits.slice(1, 3)
= [ 'orange', 'banana' ]

> fruits.slice(2) // second argument defaults to rest of array
= [ 'banana', 'pear', 'apple' ]

> fruits.slice() // no arguments duplicates the array
= [ 'mango', 'orange', 'banana', 'pear', 'apple' ]
```
NOTE:If you omit the second argument, slice returns the rest of the array starting with the index given by the first argument. With the second argument, it returns the elements up to but excluding that index. (Contrast this detail with how splice treats its second argument.) If you don't provide any arguments at all, slice returns a copy of the entire array: that is, it returns a new array with the same elements as the original. That's useful when you need to use a destructive method on an array that you don't want to modify.

**<code>reverse</code>**
<codE>reverse</code> is destructive: it mutates the array. You can use slice with no arguments if you don't want to mutate the original array:
```js
> let numbers = [1, 2, 3, 4]
> let copyOfNumbers = numbers.slice();
> let reversedNumbers = copyOfNumbers.reverse()
> reversedNumbers
= [ 4, 3, 2, 1 ]

> numbers
= [ 1, 2, 3, 4 ]
```













