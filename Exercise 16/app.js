// Question :

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

const inviteList = [
  "New Guest Arrive",
  "You are invited to live in my House",
  "New Guest Arrive",
  "You are invited to dinner at my House",
  "You are invited to lunch at my House",
];
inviteList.push("new guest");
const guest = ["aziz"];

console.log(`${inviteList[0]}`);
console.log(`Hey! Aziz, ${inviteList[1]}`);
console.log(`${inviteList[2]}`);
console.log(`Hey! Sharyar, ${inviteList[3]}`);
console.log(`Hey! Wasiq, ${inviteList[4]}`);
console.log(`${guest} can't make it`);
console.log(`Now Ahmed, ${inviteList[1]}`);
console.log(`${inviteList[5]}`);
