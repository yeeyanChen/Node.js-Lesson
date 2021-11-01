const fs = require("fs");

//UTF-16 BE
fs.readFile("./docs/UTF-16_BE_2.txt", function (err, data) {
  console.log("UTF-16_BE_2.txt", data);
  //UTF-16_example.txt <Buffer fe ff d8 3d de 0d>
});

//UTF-16 LE
fs.readFile("./docs/UTF-16_LE_2.txt", function (err, data) {
  console.log("UTF-16_LE_2.txt", data);
  //UTF-16_example.txt <Buffer ff fe 3d d8 0d de>
});

console.log("😍".charCodeAt(0)); //55357 (0xd83d)
console.log("😍".charCodeAt(1)); //56845 (0xde0d)

console.log("😍".codePointAt(0)); //128525  (0x01f60d)
console.log("😍".codePointAt(1)); //56845  (0xde0d)

console.log(String.fromCodePoint(0x1f60d));
console.log("\u{1F60D}");

console.log(String.fromCharCode(0xd83d, 0xde0d));
console.log("\ud83d\ude0d");

console.log("滑".codePointAt(0));
console.log("滑".codePointAt(0));
console.log("\ue004");
