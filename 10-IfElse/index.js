// IF STATEMENT = IF A CONDITION IS TRUE, EXECUTE SOME CODE IF NOT, DO SOMETHING ELSE

/* let age = 25;
// let age = window.prompt('Enter you age');
if (age > 18) {
    console.log("You are old enough to enter this site.");
}
else {
    console.log("You are not old enough to enter this site.");
} */


/* let time = 15;
// let time = window.prompt('What is the time in you area?');
if (time < 12) {
    console.log("Good morning");
}
else{
    console.log("Good afternoon");
} */

/* let isStudent = true;
if(isStudent){
    console.log("You are a student.");
}
else{
    console.log("You are not student.");
} */


/* let age = 25;
let hasLicense = true;
if(age >= 16){
    console.log("You are old enough to drive.");
    if(hasLicense){
        console.log("You have your license.");
    }
    else{
        console.log("You don't have you license");
    }
}
else{
    console.log("You must be 16+ to have a license.");
} */


const myText = document.getElementById(`myText`);
const mySubmit = document.getElementById(`mySubmit`);
const resultElement = document.getElementById(`resultElement`);
let age;
mySubmit.onclick = function () {
    age = myText.value;
    age = Number(age);
    if (age > 100) {
        resultElement.textContent = `You are too old to enter this site.`;
    }
    else if (age == 0) {
        resultElement.textContent = `You can't enter you were just born.`;
    }
    else if (age >= 18) {
        resultElement.textContent = `You are old enough to drive.`;
    }
    else if (age < 0) {
        resultElement.textContent = `Your age can't be below 0.`;
    }
    else {
        resultElement.textContent = `You must be 18+ to enter this site.`;
    }
}
