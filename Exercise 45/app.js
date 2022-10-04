// Question :
// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name.
//  It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.
const cars = (manufacture, model, color, type) => {
  console.log({
    manufacture,
    model,
    color,
    type,
  });
};

cars("civic", "2020");
cars("civic", "2020", "black");
cars("civic", "2020", "black", "type");
