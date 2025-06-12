// //Types in Typescript

// //Arrays
// let sc1ores11: number[] = [90, 80, 70];
// let fruits: Array<string> = ["apple", "banana"];

// //Tuples
// let person: [string, number] = ["Macben", 20];

// //object literal
// let person1: { name: string; age: number } = {
//     name: "John",
//     age: 25
// };
//   //Function Types
// function greet(name: string): string {
//     return `Hello, ${name}`;
// }
  
// const add = (a: number, b: number): number => a + b;

//   // Generics
// function identity<T>(value: T): T {
//     return value;
// }
  
// let num = identity<number>(5);
// let str = identity<string>("hello");

//   //Type Assertions
// let someValue: any = "Hello";
// let strLength: number = (someValue as string).length;

// // Union and Intersection Types
// //Union (|)
// let value: string | number = "hello";
// value = 10;
// //Intersection (&)
// type Admin = { name: string; role: string };
// type User = { name: string; email: string };

// let adminUser: Admin & User = {
//   name: "Alice",
//   role: "Admin",
//   email: "alice@example.com"
// };

// //Literal Types
// let direction: "up" | "down" | "left" | "right";
// direction = "up"; // ✅
// // direction = "back"; // ❌ Error

// //Enums
// enum Status {
//     Pending,
//     Approved,
//     Rejected
// }
// let currentStatus: Status = Status.Approved;

//   //Type Aliases and Interfaces
//   //Type Alias
// type ID = number | string;
// let userId: ID = 101;
// //Interface
// interface User1 {
//     name: string;
//     age: number;
// }

// // Literal type
// type Role = "admin" | "user";

// // Enum
// enum RoleEnum {
//   Admin = "admin",
//   User = "user"
// }

// let val1: any = "hello";
// val1.toUpperCase(); // ✅ no error

// let val2: unknown = "hello";
// // val2.toUpperCase(); ❌ Error

// if (typeof val2 === "string") {
//   val2.toUpperCase(); // ✅ Safe after check
// }

// type User111 = {
//     name: string;
//     age: number;
//   };
  
//   // Using Readonly
//   const user111: Readonly<User111> = { name: "Macben", age: 25 };
//   // user1.name = "New" ❌ Error
  
//   // Using readonly
//   type User22 = {
//     readonly name: string;
//     age: number;
//   };
  



  

// //class
// class Person {
//     constructor(public name: string, private age: number ){}
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} old`)
//     }
// }

// const macben = new Person('Macben', 20)
// macben.greet()
// macben.name      // ok macben.name is public
// // macben.age      // error macben.age is private