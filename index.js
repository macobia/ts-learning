"use strict";
const getFirstElement = (array) => {
    return array[3];
};
const numbers = [1, 2, 3, 4, 5];
console.log(getFirstElement(numbers));
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm `);
    }
}
const macben = new Person('Macben', 20);
macben.greet();
