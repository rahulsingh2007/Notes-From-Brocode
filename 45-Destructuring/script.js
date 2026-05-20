// DESTRUCTURING = EXTRACT VALUES FROM ARRAYS AND OBJECTS, THEN ASSIGN THEM TO VARIABLES IN A CONVENIENT WAY
//                 [] = TO PERFORM ARRAY DESTRUCTURING
//                 {} = TO PERFORM OBJECT DESTRUCTUING

// Swap the value of two varibles
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

// Swap two varibles in an array
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

/* // Assign array elements to variables
const colors = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors); */

/* // Extract values from objects
const person1 = {
    firstName: "Rahul",
    lastName: "Singh",
    age: 18,
    job: "Student",
}
const person2 = {
    firstName: "Rehan",
    lastName: "Singh",
    age: 9,
}

const { firstName, lastName, age, job = "Unemployed" } = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job); */

// Destructure in Function Parameters
function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}
const person1 = {
    firstName: "Rahul",
    lastName: "Singh",
    age: 18,
    job: "Student",
}
const person2 = {
    firstName: "Rehan",
    lastName: "Singh",
    age: 9,
}
displayPerson(person1);