// tuples aren't a thing in javaScript but can be made in typeScript.
// a tuple is a fixed length array

type Combinator = string | number;

const tuple: {implicit: Combinator[], explicit: [number, string]} = {
    implicit: [2, 'author'],
    explicit: [2, 'author']
}

export default tuple;