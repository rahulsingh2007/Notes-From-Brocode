// SYNCHRONOUS = EXECUTES LINE BY LINE CONSECUTIVELY IN A SEQUENTIAL MANNER CODE 
//               CODE THAT WAITS FOR AN OPERATION TO COMPLETE

// ASYNCHRONOUS = ALLOWS MULTIPLE OPERATIONS TO BE PERFORMED CONCURRENTLY WITHOUT WAITING 
//                DOESN'T BLOCK THE EXECUTION FLOW AND ALLOWS THAT PROGRAM TO CONTINUE 
//                (I/O OPERATIONS, NETWORK REQUESTS, FETCHING DATA)
//                HANDLED WITH: CALLBACKS, PROMISES, ASYNC/ AWAIT

function func1(callback) {
    setTimeout(() => {
        console.log("Task 1");
        callback()
    }, 3000);
}
function func2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
func1(func2);
