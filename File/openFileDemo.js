const fs = require("fs");

fs.open("./docs/test.txt", "r+", function (err, fd) {
  if (err) throw err;
  console.log("檔案開啟成功!");
});
