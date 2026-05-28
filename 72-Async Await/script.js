// Async = MAKES A FUNCTION RETURN A PROMISE
// Await = MAKE AN ASYNC FUNCTION WAIT FOR A PROMISE
//         ALLOWS YOU TO WRTIE ASYNCHRONOUS CODE IN A SYNCHRONOUS MANNER
//         ASYNC DOESN'T HAVE RESOLVE OR REJECT PARAMETERS
//         EVERYTHING AFTER AWAIT IS PLACED IN AN EVENT QUEUE

// DO THESE CHORES IN ORDER

// 1.WALK THE DOG
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkedDog = true;
            if (walkedDog) {
                resolve("You walked the dog.");
            }
            else {
                reject("You didn't walked the dog.");
            }
        }, 1500);
    });
};
// 2.CLEAN THE KITCHEN
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedKitchen = true;
            if (cleanedKitchen) {
                resolve("You cleaned the kitchen.");
            }
            else {
                reject("You didn't clean the kitchen.");
            }
        }, 2500);
    });
};
// 3.TAKE OUT THE TRASH
function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tookOutTrash = true;
            if (tookOutTrash) {
                resolve("You took out the trash.");
            } else {
                reject("You didn't took out the trash.")
            }
        }, 500);
    });
};

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores.");
    } catch (error) {
        console.error(error);
    }
};
doChores();