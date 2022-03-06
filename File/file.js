const fs = require("fs");
const path = require("path");
require("../Testing/test.js");

console.log("file.js ===================");

console.log(__dirname);
console.log(process.cwd());
console.log(path.resolve());
console.log(path.resolve("NodeJsQQQ"));
console.log(path.join("NodeJsQQQ"));

console.log("===========================");

// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd());
// console.log(path.resolve("./"));
// console.log(path.resolve("NodeJsQQQ")); // C:\web\NodeJs\File\NodeJsQQQ
// console.log(path.join("NodeJsQQQ")); // NodeJsQQQ
// console.log("======================");
// console.log(path.resolve("NodeJsQQQ", "/File")); // C:\File
// console.log(path.resolve("NodeJsQQQ", "/File", "..", "file.js")); // C:\File
// console.log(path.join("C:/file", "/fileB", "../fileC", "/fileD")); // C:\file\fileC\fileD
// console.log(path.resolve("C:/file", "/fileB", "../fileC", "/fileD")); // C:\fileD

// fs.readFile("TestFile.txt", function (err, data) {
//   if (err) throw err;

//   console.log(data.toString());
// });

// let childFileHTMLs = glob.sync(path.join(__dirname, "./childFile/**.html"));
// console.log(childFileHTMLs);

// childFileHTMLs.forEach((html) => {
//   fs.readFile(html, function (err, data) {
//     if (err) throw err;
//     console.log("================");

//     console.log(data.toString());
//   });
// });
