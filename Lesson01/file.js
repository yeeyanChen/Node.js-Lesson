const fs = require("fs");
var path = require("path");
console.log(fs.readFile);
// fs.readFileA("html/404.html", (err, data) => {
//   console.log(data.toString());
// });

var filepath = "/tmp/demo/js/test.js";

console.log(path.dirname(filepath)); //   /tmp/demo/js
console.log(path.basename(filepath, ".js")); //   test.js

// var uuid = require("node-uuid");
// console.log(uuid.v1());
