// GETTER = SPECIAL METHOD MAKES A PROPERTY READABLE
// SETTER = SPECIAL METHOD THAY MAKES A PROPERTY WRITEABLE

// VALIDATE AND MODIFY A VALUE WHEN READING/WRITING A PROPERTY

/* class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Width must be a positive number.");
        }
    }
    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number.");
        }
    }
    get width() {
        return `${this._width.toFixed(1)} cm`;
    }
    get height() {
        return `${this._height.toFixed(1)} cm`;
    }
    get area(){
        return `${(this._width * this._height).toFixed(1)} cm^2`;
    }
}

const rectangle = new Rectangle(3, 4)

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area); */

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length >= 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be non-empty string.");
        }
    }
    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length >= 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be non-empty string.");
        }
    }
    set age(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        }
        else {
            console.error("Age must be non-empty number..");
        }
    }
    get firstName() {
        return `My firstname is ${this._firstName}`;
    }
    get lastName() {
        return `My lastname is ${this._lastName}`;
    }
    get age() {
        return `I am ${this._age} years old.`;
    }
    get fullName() {
        return `My fullname is ${this._firstName + " " + this._lastName}.`;
    }
}
const person = new Person("Rahul", "Singh", 18)

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
