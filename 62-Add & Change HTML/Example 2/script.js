//-------------------------------Example 2--------------------------------

/* STEP 1 CREATE THE ELEMENT */
const newListItem = document.createElement("li");

/* STEP 2 ADD ATTRIBUTES/PROPERTIES */
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

/* STEP 3 APPEND ELEMENT TO DOM */
// document.body.append(newListItem)
document.getElementById(`fruits`).append(newListItem);
// document.getElementById(`fruits`).prepend(newListItem);

// const orange = document.getElementById(`orange`);
// document.getElementById(`fruits`).insertBefore(newListItem, orange);

/* REMOVE HTML ELEMENT */
document.getElementById(`fruits`).removeChild(newListItem);
