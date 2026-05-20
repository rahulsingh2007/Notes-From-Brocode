// NESTED OBJECTS = OBJECTS INSIDE OF OTHER OBJECTS
//                  ALLOWS YOU TO REPRESENT MORE COMPLEX DATA STRUCTURES
//                  CHILD OBJECTS IS ENCLOSED BY A PARENT OBJECT

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

/* const person = {
    fullName: "Rahul Singh",
    age: 18,
    isStudent: true,
    hobbies: ["sleeping","eating","gaming"],
    address: {
        street: "123 Conch St.",
        city: "Bkt",
        country: "Nepal"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0], person.hobbies[1], person.hobbies[2]);
// console.log(person.address.street)
// console.log(person.address.city)
// console.log(person.address.country)

for(const property in person.address){
    console.log(person.address[property]);
} */

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Rahul Singh", 18, "124 Conch St.", "Bkt", "Nepal");
const person2 = new Person("Rehan Singh", 9, "124 Conch St.", "Bkt", "Nepal");
const person3 = new Person("Rohan Singh", 19, "124 Conch St.", "Ktm", "Nepal");

console.log(person1);
console.log(person2);