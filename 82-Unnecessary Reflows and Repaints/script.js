const ul = document.querySelector("ul")
const space = document.createDocumentFragment();

for (i = 0; i < 1000; i++) {
    const li = document.createElement("li")
    li.textContent = i;
    space.appendChild(li);
}
ul.appendChild(space)