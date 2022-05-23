// Write a function that checks whether a string is empty or not. For example:

//isBlank('mars'); // false
// isBlank('  ');   // false
// isBlank('');     // true

// function isBlank(string) {
//   if (string === "") {
//     console.log("It's blank.");
//   } else {
//     console.log(`It's not blank. It says ${string}!`)
//   }
// }

// isBlank("");


function isBlank2(string) {
  return (string.length === 0)
}

console.log(isBlank2("Maggie"));