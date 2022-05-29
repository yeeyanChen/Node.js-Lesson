const fs = require("fs");
let pathname = process.argv[2];
let mode = process.argv[3] || "777";

mode = "00" + mode;

fs.chmod(pathname, parseInt(mode, 8), (err) => {
  if (err) throw err;
  console.log("chmod successfully");
});
