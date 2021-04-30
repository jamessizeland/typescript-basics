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