// .reduce() = REDUCE THE ELEMENTS OF AN ARRAY TO A SINGLE VALUE

/* const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);

function sum(previous, element) {
    return previous + element;
} */

const grades = [75, 50, 90, 80, 65, 95]
const maximum = grades.reduce(getmax);
const minimum = grades.reduce(getmin);

console.log(maximum);
console.log(minimum);

function getmax(accumulator, element) {
    return Math.max(accumulator, element)
}
function getmin(accumulator, element) {
    return Math.min(accumulator, element)
}