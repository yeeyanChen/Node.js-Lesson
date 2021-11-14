const fs = require("fs");

//不具有 BOM 的 UTF-8
fs.readFile("./docs/smileFace_utf16le.txt", function (err, data) {
  console.log("smileFace_utf16le.txt", data);
  // 01.txt <Buffer 68 65 6c 6c 6f 20 62 69 74 63 68>
});
