"use strict";
//Types in Typescript
//Arrays
let scores = [901, 80, 70];
let fruits = ["apple", "banana"];
//Tuples
let person = ["Macben", 20];
//object literal
let person1 = {
    name: "John",
    age: 25
};
//Function Types
function greet1(name) {
    return `Hello, ${name}`;
}
const add = (a, b) => a + b;
// Generics
function identity1(value) {
    return value;
}
let num = identity1(5);
let str = identity1("hello");
//Type Assertions
let someValue = "Hello";
let strLength = someValue.length;
// Union and Intersection Types
//Union (|)
let value = "hello";
value = 10;
let adminUser = {
    name: "Alice",
    role: "Admin",
    email: "alice@example.com"
};
//Literal Types
let direction;
direction = "up"; // ✅
// direction = "back"; // ❌ Error
//Enums
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Approved"] = 1] = "Approved";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
let currentStatus = Status.Approved;
let userId = 101;
// Enum
var RoleEnum;
(function (RoleEnum) {
    RoleEnum["Admin"] = "admin";
    RoleEnum["User"] = "user";
})(RoleEnum || (RoleEnum = {}));
let val1 = "hello";
val1.toUpperCase(); // ✅ no error
let val2 = "hello";
// val2.toUpperCase(); ❌ Error
if (typeof val2 === "string") {
    val2.toUpperCase(); // ✅ Safe after check
}
// Using Readonly
const user111 = { name: "Macben", age: 25 };
//class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} old`);
    }
}
const macben = new Person('Macben', 20);
macben.greet();
macben.name; // ok macben.name is public
// macben.age      // error macben.age is private
//30 typescript projects
// #1 reversing a string with typescript
function reverseString(str) {
    return str.split("").reverse().join("");
}
const reverseArray = (str) => {
    let reversed = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //   reversed += str[i];
    // }
    // return reversed;
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
};
const array = ["macben", "akpa", "jest", "obi"];
reverseArray(array);
const reverseString1 = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};
const result = reverseString1("macben");
console.log(result);
//#2 Check if a number is even or odd
const isEven = (num) => {
    return num % 2 === 0;
};
const isOdd = (num) => {
    return num % 2 !== 0;
};
const numberChecker = (num) => {
    if (num === 0) {
        return "even";
    }
    else if (isOdd(num)) {
        return "odd";
    }
    else {
        return "even";
    }
};
const result2 = numberChecker(0);
console.log(result2);
