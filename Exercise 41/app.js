// Question :
// Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const magicians_name = ["magician1", "magician2", "magician3"];

const show_magicians = () => {
  magicians_name.map((name) => {
    console.log(`He is ${name}`);
  });
};
show_magicians();
