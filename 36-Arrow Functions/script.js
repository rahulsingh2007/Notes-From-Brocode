// ARROW FUNCTIONS = A CONSCISE WAY TO WRITE FUNCTION EXPRESSIONS GOOD FOR SIMPLE FUNCTIONS THAT YOU USE ONLY ONCE
// (parameters) => some code

// FUNCTION DECLARATION
/* function hello(){
    console.log("Hello");
}
hello(); */

// FUNCTIONS EXPRESSIONS
/* const hello = function(){
    console.log("Hello");
}
hello(); */

// ARROW FUNCTIONS

/* const hello = (name) => console.log(`Hello ${name}`);
hello("Bro"); */

/* const hello = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old.`);
}
hello("Bro", 25) */

/* setTimeout(() => {
    console.log("Hello");
}, 3000); */

const numbers = [1, 2, 3, 4, 5, 6]

const square = numbers.map((element) => Math.pow(element, 2))
console.log(square);

const cube = numbers.map((element) => Math.pow(element, 3))
console.log(cube);

const even = numbers.filter((element) => element % 2 === 0)
console.log(even);

const odd = numbers.filter((element) => element % 2 !== 0)
console.log(odd);

const total = numbers.reduce((accumulator, element) => accumulator + element)
console.log(total);