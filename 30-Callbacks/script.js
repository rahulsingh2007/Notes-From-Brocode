// CALLBACK = A FUNCTION THAT IS PASSED AS AN ARGUMENT TO ANOTHER FUNCTION
// IT IS USED TO HANDLE ASYNCHRONOUS OPERATIONS, READING A FILE, NETWORK REQUESTS, INTERACTING WITH DATABASES
// ITS LIKE "HEY, WHEN YOU'RE DONE, CALL THIS NEXT"

/* hello(goodbye)

function hello(callback) {
    console.log("Hello!");
    callback();
}

function wait() {
    console.log("Wait!");
}
function leave() {
    console.log("Leave!");
}

function goodbye() {
    console.log("Goodbye!");
} */

sum(displayPage, 1, 2)

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}
function displayConsole(result) {
    console.log(result)
}

function displayPage(result) {
    document.getElementById(`myH1`).textContent = result;
}