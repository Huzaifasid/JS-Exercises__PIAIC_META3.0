// Question :

// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

const inviteList = [
  "You are invited to live in my House",
  "You are invited to dinner at my House",
  "You are invited to lunch at my House",
];
const guest = ["aziz"];

console.log(`Hey! Aziz, ${inviteList[0]}`);
console.log(`Hey! Sharyar, ${inviteList[1]}`);
console.log(`Hey! Wasiq, ${inviteList[2]}`);
console.log(`${guest} can't make it`);
console.log(`Now Ahmed, ${inviteList[0]}`);
