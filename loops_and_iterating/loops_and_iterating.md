# Loops and Iterating
## While Loops
```js
let counter = 1;
while (counter <= 1000) {
  console.log(counter);
  counter += 1; //same as counter = counter + 1 OR counter ++ 
}
```
When JavaScript encounters this <code>while</code> loop, it evaluates the conditional expression inside the parentheses, <code>counter <= 1000 </code>. Since <code>counter's</code> initial value is <code>1</code>, the expression is <code>true</code> at the beginning of the <code>while</code> statement and the engine runs the loop's block. Inside the block, we output <code>counter's</code> value, then increment it by <code>1</code>.

Line 4 in this example is crucial. The loop block must modify <code>counter</code> in some way that ultimately makes the loop condition <code>false</code>. If it doesn't, the loop becomes an infinite loop.

**Looping Over Arrays with While** 
```js
>let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
>let upperNames = [];
>let index = 0;
>
>while (index < names.length) {
>  let upperCaseName = names[index].toUpperCase();
>  upperNames.push(upperCaseName);
>  index += 1;
}

console.log(upperNames); //['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
```

The variable <code>names</code> holds an array of names. We want to convert every name to uppercase and append it to the empty <code>upperNames</code> array. Since array indexes are zero-based, we initialize an index variable with <code>0</code>.

Next, we use a loop that executes as long as the number in index is smaller than the length of the names array. Line 8 increments the index by <code>1</code> after each iteration, which ensures that <code>index < names.length</code> becomes <code>false</code> after the loop handles the last element.

Line 6 accesses the name stored at names[index] and uses it to call the toUpperCase method. That method returns the name in uppercase, which we assign to upperCaseName. It doesn't change the original name in the names array.
Line 7 uses the push method for arrays to append the latest uppercase name to the upperNames array. Over the five iterations of the names array, line 7 appends five uppercase names to upperNames, one per iteration, in the same order that the loop processes them.

Note that we initialized <code>names</code>, <code>upperNames</code>, and <code>index</code> before the loop. If we initialized them inside the loop, they would have block scope. Every loop iteration would create, initialize, and discard each variable. That wouldn't work well even if the code could run, which it would not.

**do/while Loop** 
A <code>do/while loop</code> differs visibly from a <code>while</code> loop, but its behavior is almost identical. The crucial difference is that <code>do/while</code> always executes the code in the block at least once. A <code>while</code> loop can't make that guarantee since the initial condition may be falsy; if it is, the loop body doesn't run. 
```js
let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');
```
When you run the code above in a browser, it displays a <code>Do you want to do that again?</code> prompt. If you enter the lowercase letter <code>y</code>, it displays the prompt again. It repeats this process until you enter something other than <code>y</code>, at which point the loop ends and control moves to the first statement or expression after the loop.

Notice how <code>while</code> and the condition are now at the end of the loop. Since the test occurs at the end of the loop, the loop always executes at least once.

## For Loops
A for loop combines variable initialization (start), a loop condition (stop), and the variable increment/decrement (step/move forward) expression all on the same line:
```js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); //['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
```

## Controlling Loops 
JavaScript uses the keywords <code>continue</code> and <code>break</code> to provide more control over loops. <code>continue</code> lets you start a new iteration of the loop, while <code>break</code> lets you terminate a loop early.

<code>continue</code>
Let's continue working with the names program. Suppose we want all the uppercase names in our upperNames array except 'Naveed'. The <code>continue</code> statement can help us do that. When a loop encounters the <code>continue</code> keyword, it skips running the rest of the block and jumps ahead to the next iteration. In this example, we tell the loop to ignore 'Naveed' and skip to the next iteration without adding 'NAVEED' to upperNames.


```js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']
```

<code>break</code>
You sometimes want to skip all remaining iterations of a loop. For instance, when you search an array for a specific value, you probably want to stop searching once you find it. There's no reason to keep searching if you don't need any subsequent matches.
```js
let array = [3, 1, 5, 9, 2, 6, 4, 7]
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
}

console.log(indexOfFive);
``` 
The break statement on line 7 tells JavaScript to terminate the loop once we find the desired element.


