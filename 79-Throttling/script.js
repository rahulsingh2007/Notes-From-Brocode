// Throttling -> Throttling is a JavaScript technique that controls how often a function executes within a fixed time interval. 
// It improves performance by ensuring functions run at a consistent rate during frequent events.

function throttle(fnc, delay) {
    let timer = 0;
    return function (...args) {
        let now = Date.now()
        if (now - timer >= delay) {
            timer = now;
            fnc(...args);
        }
    }
}
let input = document.querySelector("input");
input.addEventListener("input", throttle(function () {
    console.log("Hey");
}, 1000)
);