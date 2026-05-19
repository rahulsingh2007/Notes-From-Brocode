// SUPER = KEYWORD IS USED IN CLASSES TO CALL THE CONSTRUCTOR OR ACCESS THE PROPERTIES AND METHODS OF A PARENT (SUPERcLASS)
//         this = this object
//         super = the parent

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`The ${this.name} moves at a speed of ${speed} mph.`);
    }
}
class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`This ${this.name} can run.`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal {
    constructor(name, age, swinSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim() {
        console.log(`This ${this.name} can swim.`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly() {
        console.log(`This ${this.name} can fly.`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25)
const fish = new Rabbit("fish", 1, 12)
const hawk = new Rabbit("hawk", 3, 50)

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run()

console.log(fish.name);
console.log(fish.age);
console.log(fish.runSpeed);
fish.run()

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.runSpeed);
hawk.run()
