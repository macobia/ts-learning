//Types in Typescript

//Arrays
let scores: number[] = [901, 80, 70];
let fruits: Array<string> = ["apple", "banana"];

//Tuples
let person: [string, number] = ["Macben", 20];

//object literal
let person1: { name: string; age: number } = {
    name: "John",
    age: 25
};
  //Function Types
function greet1(name: string): string {
    return `Hello, ${name}`;
}
  
const add = (a: number, b: number): number => a + b;

  // Generics
function identity1<T>(value: T): T {
    return value;
}
  
let num = identity1<number>(5);
let str = identity1<string>("hello");

  //Type Assertions
let someValue: any = "Hello";
let strLength: number = (someValue as string).length;

// Union and Intersection Types
//Union (|)
let value: string | number = "hello";
value = 10;
//Intersection (&)
type Admin = { name: string; role: string };
type User = { name: string; email: string };

let adminUser: Admin & User = {
  name: "Alice",
  role: "Admin",
  email: "alice@example.com"
};

//Literal Types
let direction: "up" | "down" | "left" | "right";
direction = "up"; // ✅
// direction = "back"; // ❌ Error

//Enums
enum Status {
    Pending,
    Approved,
    Rejected
}
let currentStatus: Status = Status.Approved;

  //Type Aliases and Interfaces
  //Type Alias
type ID = number | string;
let userId: ID = 101;
//Interface
interface User1 {
    name: string;
    age: number;
}

// Literal type
type Role = "admin" | "user";

// Enum
enum RoleEnum {
  Admin = "admin",
  User = "user"
}

let val1: any = "hello";
val1.toUpperCase(); // ✅ no error

let val2: unknown = "hello";
// val2.toUpperCase(); ❌ Error

if (typeof val2 === "string") {
  val2.toUpperCase(); // ✅ Safe after check
}

type User111 = {
    name: string;
    age: number;
  };
  
  // Using Readonly
  const user111: Readonly<User111> = { name: "Macben", age: 25 };
  // user1.name = "New" ❌ Error
  
  // Using readonly
  type User22 = {
    readonly name: string;
    age: number;
  };
  



  

//class
class Person {
    constructor(public name: string, private age: number ){}
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} old`)
    }
}

const macben = new Person('Macben', 20)
macben.greet()
macben.name      // ok macben.name is public
// macben.age      // error macben.age is private


//30 typescript projects
// #1 reversing a string with typescript
function reverseString(str: string): string {
    return str.split("").reverse().join("");
  }

const reverseArray = (str: Array<string>)  => {
  let reversed = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversed += str[i];
  // }
  // return reversed;
  for (let i = str.length -1; i >= 0; i--){
    reversed += str[i]

  }
  console.log(reversed)
 
}
const array:Array<string> = ["macben", "akpa", "jest", "obi"]
reverseArray(array)

const reverseString1 = (str :string) :string => {
  let reversed = ''
  for (let i = str.length -1; i >=0; i--){
    reversed += str[i]
  }
  return reversed
}

const result = reverseString1("macben")
console.log(result)

//#2 Check if a number is even or odd
const isEven = (num: number): boolean => {
  return num % 2 === 0
}
const isOdd = (num: number): boolean => {
  return num % 2 !== 0
}
const numberChecker = (num: number): string => {
  if (num === 0){
    return "even"
  } else if (isOdd(num)){
    return "odd"
  } else {
    return "even"
  }
}
const result2 = numberChecker(0)
console.log(result2)

//Capitalize the first letter of each word
const capitalize = (str : string) : string => {
  const words = str.split(" ")
  const capitalizedWords = words.map(word => {
     return word.charAt(0).toUpperCase() + word.slice(1)
  })

  return capitalizedWords.join(" ")

}

const result3 = capitalize("macben john aba")
console.log(result3)

//Count vowels in a string
const countVowels = (str : string) : number => {
  const vowels = "aeiou"
  const vowelsCount = str.split("").filter(letter => vowels.includes(letter)).length
  const consonantCount = str.split("").filter(letter => !vowels.includes(letter) && /[a-z]/.test(letter)).length
  console.log(consonantCount)
  return vowelsCount
}

const result4 = countVowels("macben john aba")
console.log(result4)
