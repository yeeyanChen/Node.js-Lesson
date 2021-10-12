const path = require("path");

console.log("test.js ===================");

console.log(global);
console.log(__dirname); //C:\web\Node.js\Testing
console.log(process.cwd()); //C:\web\Node.js\File
console.log(path.resolve()); //C:\web\Node.js\File

console.log("===========================");

const os = require("os");

console.log(os.platform(), os.homedir());

console.log(process.platform);
