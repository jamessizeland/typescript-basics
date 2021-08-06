// can use void, but this is an example of a function that never returns anything, so 'never' is actually more appropriate to use.

function generateError(message: string, code: number): never {
    throw new Error(`message: ${message}, code: ${code}`)
}

export default generateError;