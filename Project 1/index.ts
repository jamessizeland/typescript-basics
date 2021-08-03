import tsFunctions from "./functions"

/*
* Basics
*/

let userName: string = "Jack";
let hasLoggedIn: boolean = true;

userName += " Herrington";

console.log(hasLoggedIn);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

// Array typing

const names: string[] = userName.split(" ");

const myValues: Array<number> = [1,2,3];

// Object typing

// type definitions can be in one place like this
interface Person {
    first: string;
    last: string;
}

const myPerson: Person = {
    first: "James",
    last: "Sizeland"
}

// define the key type of an object
const ids: Record<number, string> = {
    10: "a",
    20: "b"
}

ids[30] = "c";

// Conditionals

if (ids[30] === "D") {

}

// let typeScript infer as much as you like
for (let i = 0; i < 10; i++) {
    console.log(i);
}

[1,2,3,4].forEach((e) => console.log(e));

const out = [1,2,3,4].map((e) => e * 10);

/*
* Functions
*/

console.log(tsFunctions.addNumbers(1,2))

console.log(tsFunctions.addStrings("john","jack"));

console.log(tsFunctions.addStrings("steve"));

console.log(tsFunctions.getName({first:"James", last:"Sizeland"}))