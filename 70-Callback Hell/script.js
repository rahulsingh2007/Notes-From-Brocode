// Callback Hell = SITUATION IN JAVASCRIPT WHERE CALLBACKS ARE NESTED WITHIN OTHER CALLBACKS TO THE DEGREE WHERE THE CODE IS DIFFICULT TO READ.
//                 OLD PATTERN TO HANDLE ASYNCHRONOUS FUNCTIONS.
//                 USE PROMISES + ASYNC/AWAIT TO AVOID CALLBACK HELL

//------------------------Synchronous Functions---------------------------
/* function task1() {
    console.log("Task 1 complete");
}
function task2() {
    console.log("Task 2 complete");
}
function task3() {
    console.log("Task 3 complete");
}
function task4() {
    console.log("Task 4 complete");
}
task1();
task2();
task3();
task4();

console.log("All tasks complete."); */

//-----------------------Asynchronous Functions--------------------------

function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 complete");
        callback();
    }, 2000);
};
function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 complete");
        callback();
    }, 1000);
};
function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 complete");
        callback();
    }, 3000);
};
function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();
    }, 1500);
};
function task5(callback) {
    setTimeout(() => {
        console.log("Task 5 complete");
        callback();
    }, 1500);
};
function task6(callback) {
    setTimeout(() => {
        console.log("Task 6 complete");
        callback();
    }, 1500);
};
function task7(callback) {
    setTimeout(() => {
        console.log("Task 7 complete");
        callback();
    }, 1500);
};
function task8(callback) {
    setTimeout(() => {
        console.log("Task 8 complete");
        callback();
    }, 1500);
};
function task9(callback) {
    setTimeout(() => {
        console.log("Task 9 complete");
        callback();
    }, 1500);
};
function task10(callback) {
    setTimeout(() => {
        console.log("Task 10 complete");
        callback();
    }, 1500);
};
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    task6(() => {
                        task7(() => {
                            task8(() => {
                                task9(() => {
                                    task10(() => {
                                        console.log("All tasks completed.");
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});