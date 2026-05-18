// CLASS = (ES6 FEATURE) PROVIDES A MORE STRUCTURED AND CLEANER WAY TO WORK WITH OBJECTS COMPARED TO TRADITIONAL CONSTRUCTOR FUNCTIONS
//          EG: STATIC KEYWORD, ENCAPSULATION, INHERITANCE

class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;

const product1 = new product("Shirt", 19.99);
const product2 = new product("Pants", 29.99);
const product3 = new product("Underwear", 99.99);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total1 = product1.calculateTotal(salesTax)
console.log(`Total price (with tax): $${total1.toFixed(2)}`);

const total2 = product2.calculateTotal(salesTax)
console.log(`Total price (with tax): $${total2.toFixed(2)}`);

const total3 = product3.calculateTotal(salesTax)
console.log(`Total price (with tax): $${total3.toFixed(2)}`);