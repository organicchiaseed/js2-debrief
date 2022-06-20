// The following code takes a given name, runs a function to create a string and logs the name.
// The output should be "My name is Zara Williams !" when run.
// The code has 7 errors, find them and fix them and use node to check it is working.
// Hint: check particularly for incorrect marks/syntax, mispelled functions, and that information is returned from a function if needed.

function concatenate(first, last) {
    var full;
    full = `My name is ${first} ${last} !`;
    return full;
  }
function getName(firstName, lastName) {
    var result;
    result = concatenate(firstName, lastName);
    console.log(result);
  }
getName('Zara', 'Williams');
  
  // 1) Change to double quotation for Zara
  // 2) Back tick required for line 8 and delete quotation at the end of sentence
  // 3) In line 11, change "first" to "firstName"
  // 4) In line 13, change the word "concate" to "concatenate"
  // 5) Add return in line 9
  // 6) In line 11, add "function" to getName
  // 7) In line 16, change "secondFunction" to "getName"