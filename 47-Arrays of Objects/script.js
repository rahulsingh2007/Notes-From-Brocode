const fruits = [{ name: "apple", color: "red", calories: 95 },
{ name: "orange", color: "orange", calories: 45 },
{ name: "banana", color: "yellow", calories: 105 },
{ name: "coconut", color: "white", calories: 159 },
{ name: "pineapple", color: "yellow", calories: 37 }]

// fruits.push({name: "grapes",color: "purple", calories: 62}) 
// fruits.pop();
// fruits.splice(1,2)
console.log(fruits);

// -------------------------- For Each ---------------------------------
/* fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));
fruits.forEach(fruit => console.log(fruit.calories)); */

// ---------------------------- Map ------------------------------------
/* const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories); */

// --------------------------- Filter ----------------------------------
/* const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

const lowCalories = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalories);

const highCalories = fruits.filter(fruit => fruit.calories >= 100);
console.log(highCalories); */

// ---------------------------- Reduce -----------------------------------
/* const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit); */
