/*
Exercise 6:

Will this program produce an error when run? Why or why not?

*/
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

//No. It logs bar on line 6.
// const FOO = qux is a different entity, as it's declared within a different scope 


