// Question :
// Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.

const name = "huzaifa";

// lowercase
console.log(name.toLowerCase());

// uppercase
console.log(name.toUpperCase());

// titlecase
console.log(name.charAt(0).toUpperCase() + name.substr(1).toLowerCase());
