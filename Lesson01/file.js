const fs = require("fs");
var path = require("path");

// fs.readFile("html", { encoding: "utf8" }, (err, data) => {
//   console.log(err);
//   console.log(data);
// });

console.log(AbortController);
console.log("fuck");
// console.log(DOMException);

// var filepath = "/tmp/demo/js/test.js";

// console.log(path.dirname(filepath)); //   /tmp/demo/js
// console.log(path.basename(filepath, ".js")); //   test.js

// var uuid = require("node-uuid");
// console.log(uuid.v1());

fs.open("./html/404-zh-TW.html", "r", (err, fd) => {
  if (err) throw err;
  console.log(fd);
});
