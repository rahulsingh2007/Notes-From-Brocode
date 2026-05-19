// STATIC = A KEYWORD THAT DEFINES PROPERTIES OR METHODS THAT BELONG TO A CLASS ITSELF RATHER THAN THE OBJECTS CREATED FROM THAT CLASS 
//          (CLASS OWNS ANYTHING STATIC, NOT THE OBJECTS)

/* class mathUtil{
    static PI = 3.15159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * Math.pow(radius,2);
    }
}


console.log(mathUtil.PI);
console.log(mathUtil.getDiameter(10));
console.log(mathUtil.getCircumference(10).toFixed(2));
console.log(mathUtil.getArea(10).toFixed(2)); */

class User{
    static userCount =0;
    
    constructor(username){
        this.username = username;
        User.userCount += 1;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online.`);
    }
    sayhello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}
const user1 = new User("Rahul")
const user2 = new User("Rehan")
const user3 = new User("Rohan")

console.log(user1.username);
user1.sayhello();
console.log(user2.username);
user2.sayhello();
console.log(user3.username);
user2.sayhello();

console.log(User.userCount);
User.getUserCount();