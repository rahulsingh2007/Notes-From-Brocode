// classList = ELEMENT PROPERTY IN JAVASCRIPT USED TO INTERACT WITH AN ELEMENT'S LIST OF CLASSES (CSS CLASSES)
//             ALLOWS YOU TO MAKE REUSABLE CLASSES FOR MANY ELEMENTS ACCROSS YOUR WEBPAGE.

// add()
// remove()
// toggle(Remove if present, add if not)
// replace (oldClass, newClass)
// contains()

// --------------------------------Note 1---------------------------------
const myH1 = document.getElementById(`myH1`);
const myButton = document.getElementById(`myButton`);

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

myButton.addEventListener("mouseover",event => {
    event.target.classList.toggle("hover");
})
myButton.addEventListener("mouseout",event => {
    event.target.classList.toggle("hover");
})

myH1.classList.add("enabled");
myButton.classList.add("enabled");

myH1.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent = "Bye";
    } else {
        event.target.classList.replace("enabled","disabled");
    }
})
myButton.addEventListener("click", event => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent = "Your button";
    } else {
        event.target.classList.replace("enabled","disabled");
    }
})

// --------------------------------Note 2---------------------------------

/* let buttons = document.querySelectorAll(".myBtns");

buttons.forEach(button => {
    button.classList.add("enabled");
})
// buttons.forEach(button => {
//     button.classList.remove("enabled");
// })

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.classList.replace("enabled", "disabled");
    })
})
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
})
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })
}) */