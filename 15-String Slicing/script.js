// STRING SLICING = CREATING A SUBSTRING FROM A PORTION OF ANOTHOR STRING
// string.slice(start,end)

// const fullName = "Bro Code";

/* let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4,8);
console.log(firstName);
console.log(lastName);

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-2);
console.log(firstChar);
console.log(lastChar); */
/* 
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName); */

const email = "bro1@gmail.com"
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(userName);
console.log(extension);
