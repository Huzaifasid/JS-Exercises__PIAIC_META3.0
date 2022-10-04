// Question :
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
//  Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let name = "huzaifa";

// equality and inequality with strings

// equality
name == name ? console.log(`It is ${true}`) : console.log(`It is ${false}`);

// inequality
name == "ahmed" ? console.log(`It is ${true}`) : console.log(`It is ${false}`);

// lower case function
let casee = "CAPITAL";
casee == casee.toLowerCase()
  ? console.log(`It is ${true}`)
  : console.log(`It is ${false}`);
let casee2 = "lower";
casee2 == casee2.toLowerCase()
  ? console.log(`It is ${true}`)
  : console.log(`It is ${false}`);

let num = 10;
// equal
num == num ? console.log(`It is ${true}`) : console.log(`It is ${false}`);
// greater than
num > 5 ? console.log(`It is ${true}`) : console.log(`It is ${false}`);
//less than or equal to
num <= 10 ? console.log(`It is ${true}`) : console.log(`It is ${false}`);

// "and" and "or" operators
let age = 18;
let age2 = 12;

// "and"
age > 10 && age <= 18
  ? console.log(`It is ${true}`)
  : console.log(`It is ${false}`);

// "or"
age2 > 10 || age2 <= 18
  ? console.log(`It is ${true}`)
  : console.log(`It is ${false}`);

// array
let item = [];

// item is in a array
item == item ? console.log(`It is ${true}`) : console.log(`It is ${false}`);

// item is not  in a array
item == !item ? console.log(`It is ${false}`) : console.log(`It is ${true}`);
