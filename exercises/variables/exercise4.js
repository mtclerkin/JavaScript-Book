/*
Exercise 4:

What happens when you run the following code? Why?

*/ 
const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

//The program first greets Victor x3.
//Then, an error is generated, as "Victor" was defined using a CONST variable