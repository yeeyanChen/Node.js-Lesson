const fs = require("fs");
const path = require("path");
fs.readdir(
  __dirname,
  { withFileTypes: true, encoding: "buffer" },
  (err, files) => {
    files.forEach((file) =>
      console.log(
        path.join(__dirname, file.name.toString("utf8")),
        ` | 目錄: ${file.isDirectory()}`,
        ` | 檔案: ${file.isFile()}`,
        ` | 連結: ${file.isSymbolicLink()}`
      )
    );
  }
);
