const tsFunctions = {
    addNumbers: function (a: number, b: number): number {
        return a + b;
    },
    addStrings: (str1: string, str2: string = ""): string => `${str1} ${str2}`,
    format: (title: string, param: string | number): string => `${title} ${param}`,  // union type, like OR ||
    printFormat: (title: string, param: string | number): void => {
        console.log(tsFunctions.format(title, param)); // function with no return
    },
    fetchData: (url: string): Promise<string> => Promise.resolve(`Data from ${url}`),
    introduce: function (salutation: string, ...names:string[]): string {
        return `${salutation} ${names.join(' ')}`
    },
    getName: (user: {first: string; last: string;}): string => {
        return `${user.first} ${user.last}`;
    },
    getNameTyped: (user: {first: string; last: string;}): string => {
        return `${user?.first} ${user?.last}`;
    },
    getNameTyped2: (user: {first: string; last: string;}): string => {
        return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
    },
}



export default tsFunctions;