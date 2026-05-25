// DOM NAVIGATION = THE PROCESS OF NAVIGATING THROUGH THE STRUCTURE OF AN HTML DOCUMENT USING JAVASCRIPT

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

//---------------------------.firstElementChild----------------------------
/* const element = document.getElementById(`fruits`);
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow"; */

/* const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
}); */

//----------------------------.lastElementChild----------------------------
/* const element = document.getElementById(`fruits`);
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow"; */

/* const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
}); */

//---------------------------.nextElementSibling---------------------------
/* const element = document.getElementById(`orange`);
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow"; */

//-------------------------.previousElementSibling-------------------------
/* const element = document.getElementById(`vegetables`);
const previousSibling = element.previousElementSibling;
previousSibling.style.backgroundColor = "yellow"; */

// document.getElementById(`vegetables`).previousElementSibling.style.backgroundColor = "yellow";

//-----------------------------.parentElement------------------------------
/* const element = document.getElementById(`carrot`);
const parent = element.parentElement;
parent.style.backgroundColor = "yellow"; */

//-------------------------------.children---------------------------------
const element = document.getElementById(`deserts`);
const children = element.children;
console.log(children);
children[0].style.backgroundColor = "yellow";

/* Array.from(children).forEach(child => {
    child.style.backgroundColor = "green";
}) */


