# Variables as Pointers 
- Some variables act as pointers/references to a place (or address space) in memory
- Some variables contain values 

**Primitive Values: Variables as Pointers** 
```js
let count = 1;
count = 2;
```
On line 1, we declare a variable named <code>count</code>, and initialize it to a value of 1, which is a primitive value. Line 2 reassigns <code>count</code> to a new primitive value, 2.

Every time a JavaScript program creates a new variable, JavaScript allocates a spot somewhere in its memory to hold its value. With (most) primitive values, the actual value of the variable gets stored in this allocated memory. The <code>count</code> variable may end up at address 0x1234 in the computer's memory, and the memory at that address gets set to 1 and then 2. The process looks like this:

| code          | count                        |   
|---------------|------------------------------|
| let code = 1; | mem address: 0x1234 value: 1 |   
| code = 2;     | mem address: 0x1234 value: 2 |  

Every time the code on line 1 runs, JavaScript creates a brand new variable. If that code is in a function that gets called many times, you may end up with many different <code>count</code> variables, all stored in different locations in memory. JavaScript discards these variables and their values when it no longer needs them.

```js
> let a = 5
> let b = a
> a = 8
> a
= 8

> b
= 5
```
What's crucial to understand at this point is that variables that have primitive values store those values at the memory location associated with the variable. In our example, <code>a</code> and <code>b</code> point to different memory locations. When we assign a value to either variable, the value gets stored in the appropriate memory location. If you later change one of those memory locations, it does not affect the other memory location, even if they started off with the same value. Therefore, the variables are independent when they contain primitive values.

**Objects and Non-Mutating Operations: Variables as Pointers** 
```js
let obj = { a: 1 };
obj = { b: 2 };
obj.c = 3;
```
Creating new variables causes JavaScript to allocate a spot somewhere in its memory for the value. However, with objects, JavaScript doesn't store the value of the object in the same place. Instead, it allocates additional memory for the object, and places a pointer to the object in the space allocated for the variable. Thus, we need to follow two pointers to get the value of our object from its variable name. The process looks like this:

| code               | (variable) obj                        | The Object                                  |                                     
|--------------------|---------------------------------------|--------------------------------------------|
| let obj = { a: 1 };| mem address: 0x1248 value: 0x40011fe0 | mem address: 0x40011fe0 value: { a: 1 }    |
| obj = { b : 2 };   | mem address: 0x1248 value: 0x40012000 | mem address: 0x40012000 value: { b: 1 }    |
| obj.c = 3;         | mem address: 0x1248 value: 0x40012000 | mem address: 0x40012000 value: { b:1, c:3 }|  

In this example, <code>obj</code> is always at address 0x1248. The value at that address is a pointer to the actual object. While the pointer to the object can change, obj itself always has the same address. In the above table, we can see that obj's address doesn't change, but its value changes to the address of the object currently assigned to the variable.

```js
> let c = [1, 2]
> let d = c
> c = [3, 4]
> c
= [ 3, 4 ]

> d
= [ 1, 2 ]
```
This code works as expected since reassignment changes the pointer value of c to reference the new [3, 4] object. Though d originally had the same pointer value as c, it was stored in a different memory location (the location of d). Thus, when we reassign c, we're not changing d -- it still points to the original array. As with primitive values, this is straightforward: each variable has a value, and reassigning values does not affect any other variables that happen to have the same value. Thus, c and d are independent variables.

Mutating operations (like <code>push</code>) work a bit differently:
```js
> let e = [1, 2]
> let f = e
> e.push(3, 4)
> e
= [ 1, 2, 3, 4 ]

> f
= [ 1, 2, 3, 4 ]
```
Objects (and arrays) aren't stored in the memory location used by the variable. Instead, that memory location points to yet another memory location. That's where the object is ultimately stored.

The use of pointers has a curious effect when you assign a variable that references an object to another variable. Instead of copying the object, JavaScript only copies the pointer. Thus, when we initialize f with e, we're making both e and f point to the same array: [1, 2]. It's not just the same value, but the same array in the same location in memory. The two variables are independent, but since they point to the same array, that array is dependent on what you do to both e and f.

With e and f pointing to the same array, line 3 uses the pointer in the e variable to access and mutate the array by appending 3 and 4 to its original value. Since f also points to that same array, both e and f reflect the updated contents of the array. Some developers call this aliasing: e and f are aliases for the same value.

OVERALL, JavaScript stores primitive values in variables, but it uses pointers for non-primitive values like arrays and other objects. Pointers can lead to surprising and unexpected behavior when two or more variables reference the same object in the heap. Primitive values don't have this problem.

When using pointers, it's also important to keep in mind that some operations mutate objects, while others don't. For instance, push mutates an array, but map does not. In particular, you must understand how something like x = [1, 2, 3] and x[2] = 4 differ: both are reassignments, but the second mutates x while the first does not.

## for/in and for/of  

Two useful variants for the for loop are the for/in and for/of loops. These loops use a variant syntax to loop easily over object properties.


