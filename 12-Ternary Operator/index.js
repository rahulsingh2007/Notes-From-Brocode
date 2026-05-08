// TERNARY OPERATOR = A SHORTCUT TO IF() AND ELSE() STATEMENT HELPS TO ASSIGN A VARIABLE BASES ON A CONDITION CONDITION ? CODEIFTRUE : CODEIFFALSE;

/* let age =21;
let message = age >= 18 ? "You are an adult" : "You are a child";
console.log(message); */

/* let time = 16;
let greeting = time < 12 ? "Good Morning" : "Good Afternoon";
console.log(greeting); */

/* let isStudent = true;
let message = isStudent ? "You are a student" : "You are not a student";
console.log(message); */

let purchaseAmount = 100;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`);