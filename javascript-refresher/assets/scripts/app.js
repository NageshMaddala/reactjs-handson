// .js for import is optional 
// because build process adds that for us

// import { apiKey, abc } from "./util.js";

// Instead of importing individual exports
// just get everthing using aliasing
import * as util from "./util.js";

console.log(util.apiKey);
console.log(util.abc);

// Variables and Values

// Double quotes or single quotes doesn't matter
console.log('Hello World!');
console.log("Hello World!");

let userMessage = "Hello";
console.log(userMessage);

// Operators
// === checking for equality
console.log(10 === 10);

// Functions

function greetUser(userName, message = "Hello") {
    console.log(userName + ", " + message);
}

greetUser("Nagesh", "How are you?");
greetUser("Nagesh");

// Functions to return value

function greetUser1(userName, message = "Hello!") {
    return "Hi, I am " + userName + ". " + message;
}

const greeting1 = greetUser1("Nagesh");
console.log(greeting1);

const greeting2 = greetUser1("Nagesh", "How are you?");
console.log(greeting2);

// Arrow functions
// To deal with anonymous functions
// these functions doesn't require name
// () => {}

// Object and Classes
// To group multiple values together

// Below is a javascript object
const user = {
    name: 'Max',
    age: 23
};

console.log(user);

// Javascript objects can also store functions
// These functions are called methods

// ex:
const user1 = {
    name: "Nagesh",
    age: 33,
    greet() {
        console.log('Hello!');
        console.log(this.age);
        console.log(this.name);
        console.log(this);
    }
};

console.log(user1.name);
user1.greet();

// Objects can also be created using class keyword

class User3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    greet() {
        console.log('Hi');
    }
}

const user2 = new User3("Khushi", 8);
console.log(user2);

// Arrays
// Special kind of objects
// Array is created [ ]

const hobbies = ["hi", "hola", "good"];
console.log(hobbies[1]);
console.log(hobbies[0]);
console.log(hobbies[2]);

hobbies.push("Working");
console.log(hobbies);

// Passing function to another function
// const index = hobbies.findIndex((item) =>{
//     return item === "hola";
// });

const index = hobbies.findIndex((item) => item === "hola");

console.log(index);

// map method
// It allows to transform every item in an array to another item

const editedHobbies = hobbies.map((item) => item + "!");
// Original array remains unchanged
console.log(hobbies);
console.log(editedHobbies);

const editedHobbies1 = hobbies.map((item) => ({text:item}));
console.log(editedHobbies1);

// Destructing - Modern javascript feature

const names = ["Nagesh","Maddala"];
const firstName = names[0];
const lastName =  names[1];
console.log(firstName);
console.log(lastName);

const [fName, lName] = ["Khushi", "Maddala"];
console.log(fName);
console.log(lName);

// Destructuring for object

const {name: userName, age} = {
    name: "Rishaan",
    age: 8
};

console.log(userName);
console.log(age);

// Spread Operator

const fooditems = ["daal", "yogurt"];
const fooditems1 = ["egg", "chicken"];
// flattened list
const finalItems = [...fooditems, ...fooditems1];
console.log(finalItems);

// nested list
const fItems = [fooditems, fooditems1];
console.log(fItems);

const extendedUser2 = {
    isAdmin: true,
    ...user2
};
console.log(extendedUser2);

// Unique Javascript Features

// Passing function as a value to function

setTimeout(() => {console.log("hi"), 1000});

function handleTimeout() {
    console.log("Timed out!");
}

const handleTimeout2 = () => {
    console.log("Timed out ... again!");
};

setTimeout(handleTimeout, 2000);

// custom function
function greeter(greetFn){
    greetFn();
}

greeter(() => console.log("Hiiii"));

