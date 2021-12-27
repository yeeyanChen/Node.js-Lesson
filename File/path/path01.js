const path = require("path");

console.log(path.sep);
console.log(path.delimiter);

// const process = require("process");

console.log(process.env.PATH);

console.log(__filename)

console.log(path.join("C://", "web", "../test"));
console.log(path.resolve("/user", "/web", "test.txt"));
console.log(path.parse("/user/web/test.txt"));

let obj = {
    root: '/',
    base: 'test.txt',
};
  
console.log(path.format(obj));