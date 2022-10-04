// Question :
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.

const arr = [];
arr[2].push("hello");
arr[2] ? arr[2].push("hello") : arr.push("hello");
console.log(arr);
