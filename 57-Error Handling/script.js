// ERROR = AN OBJECT THAT IS CREATED TO REPRESENT A PROBLEM THAT OCCURS 
//         OCCUR OFTEN WITH USER INPUT OR ESTABLISHING A CONNECTION

// try{} = Encloses code that might potentially cause an error
// catch{} = Catch and handle any thrown Errors from try { }
// finally{} = (optional) Always executes. Used mostly for clean up
//             ex. close files, close connection, release resources

/* try {
    console.log(x);
} catch (error) {
    console.error(error);
}
finally {
    // close Files
    // close connections
    // release resources
    console.log("This always executes.");
}
console.log("You have reached the end."); */

try {
    const dividend = Number(window.prompt("Enter a dividend:"));
    const divisor = Number(window.prompt("Enter a divisor:"));

    if (divisor == 0) {
        throw new Error("You can divide by zero!");
    }
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Values must be a number.");
    }

    const result = dividend / divisor;
    console.log(result);
} catch (error) {

    console.error(error)
}
console.log("You have reached the end.");