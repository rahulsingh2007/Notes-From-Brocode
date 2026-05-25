// DOM = DOCUMENT OBJECT MODEL
//       OBJECT() THAT REPRESENTS THE PAGE YOU SEE IN THE WEB BROWSER AND PROIVDES YOU WITH AN API TO INTERACT WITH IT.
//       WEB BROWSER CONSTRUCTS THE DOM WHEN IT LOADS AN HTML DOCUMENT, AND STRUCTURES ALL THE ELEMENTS IN A TREE-LIKE REPRESENTATION.
//       JAVASCRIPT CAN ACCESS THE DOM TO DYNAMICALLY CHANGE THE CONTENT, STRUCTURE, AND STYLE OF A WEB PAGE.

// console.log(document);
// console.dir(document);

/* document.title = "My Website";
document.body.style.backgroundColor = "hsl(0,0%,15%)"
console.dir(document); */

const username = "Bro Code";
const welcomeMsg = document.getElementById(`welcome-msg`);
welcomeMsg.textContent += username === "" ? 'Guest' : username;