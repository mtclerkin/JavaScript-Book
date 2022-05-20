/*
Exercise 4: 

What does this code log to the console? 
*/
function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// It doesn't log anything, as return terminates the function; if "return" is removed
// "Yipeee!!!!" is logged 