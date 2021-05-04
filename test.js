const tsFunctions = require("./functions");

console.log(
  tsFunctions.default.getName({
    first: "John",
    last: "Smith",
  })
);

// type checking happens at compile time not runtime
// console.log(tsFunctions.default.getName());

console.log(
  tsFunctions.default.getNameTyped({
    first: "John",
    last: "Smith",
  })
);

// type checking happens at compile time not runtime
console.log(tsFunctions.default.getNameTyped());

console.log(
  tsFunctions.default.getNameTyped2({
    first: "John",
    last: "Smith",
  })
);

// type checking happens at compile time not runtime
console.log(tsFunctions.default.getNameTyped2());
