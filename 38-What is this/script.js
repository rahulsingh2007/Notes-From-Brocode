// this = REFERENCE TO THE OBJECT WHERE 'THIS' IS USED
//        (THE OBJECT DEPENDS ON THE IMMEDIATE CONTEXT)
//        person.name = this.name
console.log(this);

const person1 = {
    name: "Rahul",
    food: "Pizza",
    hello: function() {console.log(`Hi I am ${this.name}`)},
    eat: function() {console.log(`I eat ${this.food}`)},
}
const person2 = {
    name: "Rehan",
    food: "Pasta",
    hello: function() {console.log(`Hi I am ${this.name}`)},
    eat: function() {console.log(`I eat ${this.food}`)},
}

person1.eat();
person2.eat();