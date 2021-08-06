import { type } from "node:os";

// set a timeout so the React page can render the input before we try to modify it
setTimeout((() => {
    // can typecast with <HTMLInputElement> or 'as HTMLInputElement'
    // const userInputElement2 = <HTMLInputElement>document.getElementById('user-input');
    const userInputElement = document.getElementById('user-input') as HTMLInputElement;

    userInputElement.value = 'Hi there!';
}), 1000)


// Index Properties
interface ErrorContainer {
    id: string; // some pre-defined properties
    [prop: string]: string; // dynamic properties, undefined number, but types defined
}

const errorBag: ErrorContainer = {
    id: (Math.floor(Math.random()*100)).toString(),
    email: 'not a valid email',
    username: 'Must start with a capital'
};

// Function Overloads
type Combinator = string | number;

// define multiple more specific type combinations
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinator, b: Combinator) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Max', ' Schwartz');
result.split(' ');

// Optional Chaining
const isJob = Math.random() > 0.5;
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: isJob ? {title: 'CEO', description: 'My own company'} : {}
};
// don't know for certain if the job will exist on this object
console.log(fetchedUserData?.job?.title);

// nullish data

export default errorBag;