// Question :
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

const make_shirt = (text, size = 200) => {
  console.log(`${text} ${size}`);
};

make_shirt("The prize of the shirt is");
