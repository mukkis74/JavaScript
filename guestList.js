var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("Enter your name");

if (guestList.includes(guestName)) {
    console.log("Welcome to the party!");
} else {
    console.log("Sorry, you are not on the guest list.");
}