// Question :
// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//  Call show_magicians() to see that the list has actually been modified.

let show_magicians = (magicians_name) =>
    magicians_name.map((name) => console.log(`${name} is a magicians`)),
  magicians_name = ["magician1", "magician2", "magician3"];

const make_great = (magicians_name) =>
  magicians_name.map((name) => `Great ${name}`);

magicians_name = make_great(magicians_name);

show_magicians(magicians_name);
