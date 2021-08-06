function add(n1: number, n2: number): number {
    return n1 + n2;
}

export function printResult(num: number) {
    console.log('Result: ' + num);
    
}

// function type definitions
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; // this won't work because printResults has the wrong type in/output

combineValues(5, 12);

function addAndHandle(n1: number, n2:number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
};

export default addAndHandle;