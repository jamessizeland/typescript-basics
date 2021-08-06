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


export default errorBag;