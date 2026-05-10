// METHOD CHAINING = CALLING ONE METHOD AFTER ANOTHER IN ONE CONTINUOUS LINE OF CODE

// ----- NO METHOD CHAINING -----

/* let username = window.prompt("Enter you username: ");
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;
console.log(username); */

// ----- METHOD CHAINING -----

let username = window.prompt("Enter you username: ");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);