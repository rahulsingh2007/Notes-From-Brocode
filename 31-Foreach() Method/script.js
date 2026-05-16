// FOREACH() = METHOD USED TO ITERATE OVER THE ELEMENTS OF AN ARRAY AND APPLY A SPECIFIED FUNCTION (CALLBACK) TO EACH ELEMENT
// attay.forEach(callback)
// element, index, array are provided

/* let numbers = [1, 2, 3, 4, 5];
numbers.forEach(display);

// numbers.forEach(double)
// numbers.forEach(triple)
// numbers.forEach(square)


function double(element, index, array) {
    array[index] = element * 2;
}
function triple(element, index, array) {
    array[index] = element * 3;
}
function square(element, index, array) {
    array[index] = Math.pow(element, 2);
}

function display(element) {
    console.log(element);
} */

let fruits = ["apple", "banana", "orange", "coconut"]

// fruits.forEach(upperCase);
// fruits.forEach(lowerCase);
fruits.forEach(capitalize);
fruits.forEach(display);

// function upperCase(element, index, array) {
//     array[index] = element.toUpperCase();
// }
// function lowerCase(element, index, array) {
//     array[index] = element.toLowerCase();
// }
function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function display(element) {
    console.log(element);
}
