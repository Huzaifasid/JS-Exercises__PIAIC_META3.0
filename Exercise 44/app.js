// Question :
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered.
//  Call the function three times, using a different number of arguments each time.

const sandwiches = (items) => {
  console.log(`${items} is being ordered.`);
};

sandwiches(["chicken sandwich"]);
sandwiches(["chicken sandwich2", "chicken sandwich3"]);
sandwiches(["chicken sandwich4", "chicken sandwich5", "chicken sandwich6"]);
