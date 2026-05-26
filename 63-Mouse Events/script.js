// eventListener = LISTEN FOR SPECIFIC EVENTS TO CREATE INTERACTIVE WEB PAGES EVENTS: click, mouseover, mouseout
//                 .addEventListener(event, callback);

const myBox = document.getElementById(`myBox`);
const myBtn = document.getElementById(`myBtn`);
/* function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch 😩";
} */
myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 😫";
})
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do 😠"
})
myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😁"
})

myBtn.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Ouch! 😫";
})
myBtn.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do 😠"
})
myBtn.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😁"
})