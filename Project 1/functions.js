const tsFunctions = {
  addNumbers: function (a, b) {
    return a + b;
  },
  addStrings: (str1, str2 = "") => `${str1} ${str2}`,
  format: (title, param) => `${title} ${param}`,
  printFormat: (title, param) => {
    console.log(tsFunctions.format(title, param)); // function with no return
  },
  fetchData: (url) => Promise.resolve(`Data from ${url}`),
  introduce: function (salutation, ...names) {
    return `${salutation} ${names.join(" ")}`;
  },
  getName: (user) => {
    return `${user.first} ${user.last}`;
  },
  getNameTyped: (user) => {
    return `${user === null || user === void 0 ? void 0 : user.first} ${
      user === null || user === void 0 ? void 0 : user.last
    }`;
  },
  getNameTyped2: (user) => {
    var _a, _b;
    return `${
      (_a = user === null || user === void 0 ? void 0 : user.first) !== null &&
      _a !== void 0
        ? _a
        : "first"
    } ${
      (_b = user === null || user === void 0 ? void 0 : user.last) !== null &&
      _b !== void 0
        ? _b
        : "last"
    }`;
  },
};
exports["default"] = tsFunctions;
