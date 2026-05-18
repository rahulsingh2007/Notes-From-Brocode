// FUNCTION DECLARATION = DEFINE A REUSABLE BLOCK OF CODE THAT PERFORMS A SPECIFIC TASK

/* function hello() {
    console.log("Hello");
}
 */

/* const numbers = [1,2,3,4,5,6]
const squares = numbers.map(square);

console.log(squares);

function square(element){
    return Math.pow(element,2);
} */

// FUNCTION EXPRESSION = A WAY TO DEINE FUNCTIONS AS VALUES OR VARIABLES

/* const hello = function(){
    console.log("Hello");
}
hello(); */

/* setTimeout(() => {
    console.log("Hello");
}, 3000); */

/* const numbers = [1, 2, 3, 4, 5, 6]
const squares = numbers.map(function (element) {
    return Math.pow(element, 2)
});
const cubes = numbers.map(function (element) {
    return Math.pow(element, 3)
});

console.log(squares);
console.log(cubes); */

const numbers = [1, 2, 3, 4, 5, 6]

const even = numbers.filter(function (element) {
    return element % 2 === 0;
});

const odd = numbers.filter(function (element) {
    return element % 2 !== 0;
});

const total = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
})

console.log(even);
console.log(odd);
console.log(total);