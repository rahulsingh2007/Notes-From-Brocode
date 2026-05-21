// SORT() = METHOD USED TO SORT ELEMENTS OF AN ARRAY IN PLACE.
//          SORTS ELEMENTS AS STRINGS IN LEXICOGRAPHIC ORDER, NOT ALPHABETICAL
//          LEXICOGRAPHIC = (ALPHABET + NUMBERS + SYMBOLS) AS STRINGS

/* let fruits = ["apple", "orange","banana"]
fruits.sort();
console.log(fruits); */

/* let numbers = [1, 4, 2, 6, 3, 5, 9, 0, 7, 8, 10, 11]
numbers.sort((a, b) => a - b)
console.log(numbers); */

const people = [{ name: "Rahul", age: 18, gpa: 3.0 },
{ name: "Rehan", age: 37, gpa: 1.5 },
{ name: "Rohan", age: 51, gpa: 2.5 },
{ name: "Rajan", age: 27, gpa: 4.0 },
]
people.sort((a, b) => a.name.localeCompare(b.name))
// people.sort((a, b) => a.age - b.age)
// people.sort((a, b) => a.gpa - b.gpa)
console.log(people);