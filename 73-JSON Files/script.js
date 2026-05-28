// JSON = (JAVASCRIPT OBJECT NOTATION) DATA-INTERCHANGE FORMAT.
//        USED FOR EXCHANGING DATA BETWEEN A SERVER AND A WEB APPLICATION
//        JSON files {key:values} or [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string
//        JSON.parse() = converts a JSON to a JS object

fetch("names.json")
    .then(respone => respone.json())
    .then(value => console.log(value))
    .catch(error => console.error(error));
fetch("person.json")
    .then(respone => respone.json())
    .then(value => console.log(value))
    .catch(error => console.error(error));
fetch("people.json")
    .then(respone => respone.json())
    .then(value => console.log(value))
    .catch(error => console.error(error));

//------------------------------Stringify---------------------------------
/* const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = { "name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Cooking"] }
const people = [{ "name": "Spongebob", "age": 30, "isEmployed": true },
                { "name": "Patrick", "age": 34, "isEmployed": false },
                { "name": "Squidward", "age": 50, "isEmployed": true },
                { "name": "Sandy", "age": 27, "isEmployed": false }]

const jsonNames = JSON.stringify(names);
const jsonPerson = JSON.stringify(person);
const jsonPeople = JSON.stringify(people);

console.log(names);
console.log(person);
console.log(people);
console.log(jsonNames);
console.log(jsonPerson);
console.log(jsonPeople); */

//---------------------------------Parse-----------------------------------
/* const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{ "name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Cooking"]}`;
const jsonPeople = `[{ "name": "Spongebob", "age": 30, "isEmployed": true },
                { "name": "Patrick", "age": 34, "isEmployed": false },
                { "name": "Squidward", "age": 50, "isEmployed": true },
                { "name": "Sandy", "age": 27, "isEmployed": false }]`;

const parsedNames = JSON.parse(jsonNames);
console.log(parsedNames);
const parsedPerson = JSON.parse(jsonPerson);
console.log(parsedPerson);
const parsedPeople = JSON.parse(jsonPeople);
console.log(parsedPeople); */