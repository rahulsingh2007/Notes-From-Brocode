// setTimeOut() = FUNCTION IN JAVASCRIPT THAT ALLOWS YOU TO SCHEDULE
//              THE EXECUTION OF A FUNCTION AFTER AN AMOUNT OF TIME (MILLISECONDS)
//              TIMES ARE APPROXIMATE (VARIES BASES ON THE WORKLOAD OF THE JAVASCRIPT RUNTIME ENV.)

//              setTimeOut(callback, delay)
// clearTimeOut(timeoutId) = can cancel a timeout before it triggers

/* const timeoutId = setTimeout(() => {
    console.log("hello");
}, 3000);
// clearTimeout(timeoutId); */

let timeoutId;
function startTimer(){
    timeoutId = setTimeout(() => {
        window.alert("Hello")
        console.log("STARTER");
    }, 3000);
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log("CLEARED");
}
