// MODULE PATTERN
// Module pattern is a code design pattern in which we write our code inside a self executing function (IIFE) so that variables and functions remain private
// In this we return only those which we want to use outside the IIFE
// The advantage of this pattern is that data hiding (encapsulation), clean structure, code secure, the code can be reusable and managable.

/* let Bank = (function () {
    let bankBalance = 12000;
    function checkBalance() {
        console.log(bankBalance);
    }
    function setBalance(val) {
        bankBalance = val;
    }
    function withdraw(val) {
        if (val <= bankBalance) {
            bankBalance -= val;
            console.log(bankBalance);
        }
    }
    return {
        checkBalance,
        setBalance,
        withdraw,
    };
})();
Bank.checkBalance(); */

// REVEALING MODULE PATTERN

/* let Bank = (function () {
    let bankBalance = 12000;
    function checkBalance() {
        console.log(bankBalance);
    }
    function setBalance(val) {
        bankBalance = val;
    }
    function withdraw(val) {
        if (val <= bankBalance) {
            bankBalance -= val;
            console.log(bankBalance);
        }
    }
    return {
        check: checkBalance,
        set: setBalance,
        draw: withdraw,
    };
})();
Bank.check(); */

// FACTORY FUNCTION PATTERN

// A function which created a object everytime it is called without using CLASS and KEYWORD (Factory = Object Creator)
// The main idea of this pattern is to control object creation through a function.
// The object which is returned can have our methods or private data.
// It is mostly used when we want only one type of object like users, products, tasks etc.

/* function createProduct(name, price) {
    let stock = 10;
    return {
        name,
        price,
        checkStock(){
            console.log(`We have currently ${stock} pieces left.`);
        },                  
        buy(qty) {
            if (qty <= stock) {
                stock -= qty;
                console.log(`${qty} pieces booked - ${stock} pieces left.`);
            }
            else{
                console.error(`We only have ${stock} pieces.`)
            }
        },
        refill(qty) {
            stock += qty;
            console.log(`Refilled the stock - ${stock} pieces now.`);
        }
    }
}
let iphone = createProduct("iphone",70000);
let kitkat = createProduct("kitkat",10);
iphone.buy(6);
kitkat.buy(2);
iphone.checkStock();
kitkat.checkStock();
iphone.refill(100);
iphone.checkStock(); */

// OBSERVER PATTERN
// The Observer Pattern is a behavioral design pattern where an object (known as the Subject or Observable) maintains a list of dependents (called Observers) and automatically notifies them of any state changes. 
// It is widely used in JavaScript to implement event-driven architectures, handle asynchronous data streams, and build reactive user interfaces.

/* class YoutubeChannel {
    constructor() {
        this.subscribers = [];
    }
    subscribe(user) {
        this.subscribers.push(user);
        user.update(`you subscribed the channel.`);
    }
    unsubscribe(user) {
        this.subscribers = this.subscribers.filter((sub) => sub !== user);
        user.update(`you have unsubscribed the channel.`);
    }
    notify(message) {
        this.subscribers.forEach(sub => sub.update(message))
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(`${this.name}, ${data}`);
    }
}
let rahulYt = new YoutubeChannel();
let user1 = new User("Rahul");
let user2 = new User("Rehan");
rahulYt.subscribe(user1);
rahulYt.subscribe(user2);
rahulYt.notify("new video is live on the channel.") */