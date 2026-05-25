// ELEMENT SELECTORS = METHODS USED TO TARGET AND MANIPULATE HTML ELEMENTS
//                     THEY ALLOW YOU OT SELECT ONE OR MULTIPLE HTML ELEMENTS FROM THE DOM 

// 1. document.getElementById()             // ELEMENT OR NULL
// 2. document.getElementsByClassName()       // HTML COLLECTION
// 3. document.getElementByTagName()        // HTML COLLECTION
// 4. document.querySelector()              // ELEMENT OR NULL
// 5. document.querySelectorAll()           // NODELIST

// ---------------------document.getElementById()------------------------
/* const myHeading = document.getElementById(`my-heading`);
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading); */

// ------------------document.getElementsClassName()-----------------------
/* const fruits = document.getElementsByClassName("fruits");

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow"
// }

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
})

// fruits[0].style.backgroundColor = "yellow";
console.log(fruits);
 */

// -----------------document.getElementByTagName()------------------------
/* const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// for (let h4Element of h4Elements) {
//     h4Element.style.backgroundColor = "yellow";
// }
// for (let liElement of liElements) {
//     liElement.style.backgroundColor = "green";
// }

Array.from(h4Elements).forEach(h4Elements => {
    h4Elements.style.backgroundColor = "yellow";
})
Array.from(liElements).forEach(liElements => {
    liElements.style.backgroundColor = "green";
})

// h4Elements[0].style.backgroundColor = "yellow";
console.log(h4Elements); 
*/

// ----------------------document.querySelector()--------------------------
/* const element = document.querySelector("ul");
element.style.backgroundColor = "yellow";
console.log(element); 
*/

// ----------------------document.querySelectorAll()-----------------------
const foods = document.querySelectorAll("li");
// foods[0].style.backgroundColor = "yellow";
foods.forEach(foods => {
    foods.style.backgroundColor = "yellow";
})
console.log(foods); 