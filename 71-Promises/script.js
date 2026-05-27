// Promise = ALL OBJECT THAT MANAGES ASYNCHRONOUS OPERATIONS.
//           WRAP A PROMISE OBJECT AROUND {AYNCHRONOUS CODE}
//           "I PROMISE TO RETURN A VALUE"
//           PENIDNG --> RESOLVED OR REJECTED
//           new Promise((resolve, reject) => {asynchronous code})

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
}
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
}
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
}

walkDog().then(value => { console.log(value); return cleanKitchen() })
    .then(value => { console.log(value); return takeOutTrash() })
    .then(value => { console.log(value); console.log("You have completed the chores."); })
    .catch(error => { console.error(error); })
