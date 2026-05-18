// OBJECT = A COLLECTION OF RELATED PROPERTIES AND/OR METHODS 
//          CAN REPRESENT REAL WORLD OBJECTS (PEOPLE, PRODUCTS, PLACES)
//          object = {key:value,
//                    function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age : 30,
    isEmployeed: true,
    sayHello: function(){console.log("Hi! I am spongebob!");},
    eat: function(){console.log("I am eating a Karabby Patty");},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployeed: false,
    sayHello: () => {console.log("Hey! I am Patrick...");},
    eat: () => {console.log("I am eating a Pizza");},
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployeed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployeed);
person2.sayHello();
person2.eat();