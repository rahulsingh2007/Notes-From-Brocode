// FUNCTION = A SECTION OF REUSABLE CODE.
//            DECLARE CODE ONCE, USE IT WHENEVER YOU WANT.
//            CALL THE FUNCTION TO EXECUTE THAT CODE.

/* function happyBirthday(username,age) {
    console.log(`Happy Birthday To You!`);
    console.log(`Happy Birthday Dear ${username}!`);
    console.log(`Happy Birthday To You!`);
    console.log(`You are ${age} years old!`);
}
happyBirthday("Rahul",15);
happyBirthday("Rehan",9) */
/* 
function add(x, y) {
    return x + y;
}
function subtracts(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
console.log(add(2, 3));
console.log(subtracts(2, 3));
console.log(multiply(2, 3)); */

/* function isEven(number) {
    return number % 2 === 0 ? true : false;
}
console.log(isEven(14)); */

function isValidEmail(email) {
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("rahul@gmail.com"));