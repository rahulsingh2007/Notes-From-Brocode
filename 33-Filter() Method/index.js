// FILTER() = CREATES A NEW ARRAY BY FILTERING OUT ELEMENTS

let numbers = [1, 2, 3, 4, 5, 6, 7]

/* let evenNum = numbers.filter(isEven)
let oddNum = numbers.filter(isOdd)

console.log(evenNum);
console.log(oddNum);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
} */

/* const ages = [16, 17, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(adults);
console.log(children);

function isAdult(element) {
    return element >= 18;
}
function isChild(element) {
    return element < 18;
} */

const words = ["apple", "orange", "banana", "kiwi", "pomegrante", "coconut"]
const shortWords = words.filter(shortWord)
const longWords = words.filter(longWord)

console.log(shortWords);
console.log(longWords);

function shortWord(element) {
    return element.length <= 6;
}
function longWord(element) {
    return element.length > 6;
}