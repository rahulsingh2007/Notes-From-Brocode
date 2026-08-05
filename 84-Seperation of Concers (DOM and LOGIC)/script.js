// DOM code and LOGIC code should be separate.
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

function add(num1, num2) {
    const result = num1 + num2;
    return `You have added ${num1} and ${num2} which resulted to ${result}.`;
}
btn.addEventListener("click", function () {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    let addition = add(num1, num2);
    let li = document.createElement("li");
    li.textContent = addition;
    ul.appendChild(li);
});