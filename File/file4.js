const fs = require("fs");

// UTF-16 BE
fs.readFile("./docs/UTF-16_BE.txt", function (err, data) {
  console.log("UTF-16_BE.txt", data);
  //UTF-16_example.txt <Buffer fe ff d8 08 df 45>
});

// UTF-16 LE
fs.readFile("./docs/UTF-16_LE.txt", function (err, data) {
  console.log("UTF-16_LE.txt", data);
  //UTF-16_example01.txt <Buffer ff fe 08 d8 45 df>
});

//說明電腦是 LE
console.log(String.fromCharCode(0xd808, 0xdf45)); //𒍅
console.log("\ud808\udf45"); //𒍅
// console.log(String.fromCharCode(0x08d8, 0x45df)); //䗟
console.log("𒍅".charCodeAt(0)); //55304  (0xd808)
console.log("𒍅".charCodeAt(1)); //57157  (0xdf45)

console.log(String.fromCodePoint(0x12345)); //𒍅

console.log("𒍅".codePointAt(0)); //74565 (0x12345)
console.log("𒍅".codePointAt(1)); //57157 (0xdf45)

// console.log(String.fromCharCode(0xe6, 0xb1, 0x89));
// console.log(String.fromCodePoint(27721)); //汉;
