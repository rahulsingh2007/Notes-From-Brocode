// DEBOUNCING -> When we are performing a action and we don't want anything to occur while doing action but if there is a certain gap or a pause then perform an event in that gap is called debouncing.

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn(...args);
        }, delay);
    };
}
let input = document.querySelector("input");
input.addEventListener("input", debounce(function () {
    console.log("Hey");
}, 1000)
);