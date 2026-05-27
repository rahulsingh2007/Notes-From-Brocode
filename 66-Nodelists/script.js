// Nodelist = STATIC COLLECTION OF HTML ELEMENTS BY (ID, CLASS, ELEMENT)
//            CAN BE CREATED BY USING querySelectorAll()
//            SIMILAR TO AN ARRAY, BUT NO (MAP, FILTER, REDUCE)
//            NODELIST WON'T UPDATE TO AUTOMATICALLY REFLECT CHANGES

let buttons = document.querySelectorAll(".myBtns");
console.log(buttons);

// ------------------ADD HTML/CSS PROPERTIES------------------------

/* buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "Hello";
}) */

// -----------------------CLICK EVENT LISTENER---------------------------

/* buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "pink";
    });
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(240, 100%, 60%)";
    });
}); */

// ---------------------------ADD AN ELEMENT------------------------------

/* const newButton = document.createElement("button"); //STEP 1
newButton.textContent = "Button 5"; //STEP 2
newButton.classList = "myBtns"; //STEP 3
document.body.appendChild(newButton); //STEp 3
console.log(buttons);

buttons = document.querySelectorAll(".myBtns")
console.log(buttons); */

// ------------------------REMOVE AN ELEMENT------------------------------

/* buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myBtns")
        console.log(buttons);
    })
}) */


