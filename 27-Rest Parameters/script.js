// REST PARAMETERS = (...rest) ALLOW A FUNCTION WORK WITH A VARIABLE NUMBER PF ARGUMENTS BY BUNDLING THEM INTO A ARRAY
//                  SPREAD = EXPANDS AN ARRAY INTO SEPERATE ALEMENTS
//                  REST = BUNDLES SEPERATE ELEMENTS INTO AN ARRAY

/* function openFridge(...foods) {
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}
let food1 = ["pizza"]
let food2 = ["burger"]
let food3 = ["sushi"]
let food4 = ["taco"]
let food5 = ["ramen"]
// openFridge(food1, food2, food3, food4, food5);
const foods = getFood(food1,food2,food3,food4,food5)
console.log(foods); */

/* function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1,2,3,4,5);
console.log(`Your total is $${total}.`);

function average(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const av = average(1,2,3,4,5);
console.log(`Your average is $${av}.`); */

function combineString(...strings) {
    return strings.join(" ")
}
const fullName = combineString("Mr","Spongebob","Squarepants","III")
console.log(fullName);
