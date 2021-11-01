const fs = require("fs");

//不具有 BOM 的 UTF-8
fs.readFile("./docs/01.txt", function (err, data) {
  console.log("01.txt", data);
  // 01.txt <Buffer 68 65 6c 6c 6f 20 62 69 74 63 68>
});

//具有 BOM 的 UTF-8
//前 3 個 byte 為 ef bb bf，即 BOM 字元
fs.readFile("./docs/02.txt", function (err, data) {
  console.log("02.txt", data);
  // 02.txt <Buffer ef bb bf 68 65 6c 6c 6f 20 62 69 74 63 68>
});

//具有 BOM 的 UTF-16BE
//前 2 個 byte 為 fe ff，即 BOM 字元
fs.readFile("./docs/03.txt", function (err, data) {
  console.log("03.txt", data);
  // 03.txt <Buffer fe ff 00 68 00 65 00 6c 00 6c 00 6f 00 20 00 62 00 69 00 74 00 63 00 68>
});

//具有 BOM 的 UTF-16LE
//前 2 個 byte 為 ff fe，即 BOM 字元
fs.readFile("./docs/04.txt", function (err, data) {
  console.log("04.txt", data);
  // 04.txt <Buffer ff fe 68 00 65 00 6c 00 6c 00 6f 00 20 00 62 00 69 00 74 00 63 00 68 00>
});
