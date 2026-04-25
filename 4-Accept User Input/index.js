/* HOW TO ACCEPT USER INPUT
1. EASY WAY = WINDOW PROMPT
2. PROFESSIONAL WAY = HTML TEXTBOX */
/* 
let username;
username = window.prompt("What you username?")
console.log(username); */

let username;
document.getElementById(`mySubmit`).onclick = function () {
    username = document.getElementById(`myText`).value;
    document.getElementById(`myH1`).textContent = `Hello ${username}`;
};