// This code should count up by one and log the index five times, it's output should be:
// Starting Loop
// Current Count : 0
// Current Count : 1
// Current Count : 2
// Current Count : 3
// Current Count : 4
// Loop stopped!
// The following code has 4 errors, find them and fix them and use node to check the output.
count = 0;
            
            console.log("Starting Loop");
            do {
               console.log("Current Count : " + count);
               count++;
            }
            
            while (count < 5)
               console.log ("Loop stopped!");
            
            

// 1) Change "then" to "while"
// 2) Change count "--" to "++"
// 3) "Loop stopped!" was missing closing double quotations
// 4) Change line 12 "console" to "console.log"
// 5) Deleted const