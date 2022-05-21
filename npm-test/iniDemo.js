const ini = require("ini");

const fs = require("fs");
fs.readFile("./.npmrc", function (err, data) {
  if (err) {
    console.err(err); //ENOENT: no such file or directory
  }
  console.log(ini.parse(data.toString()));
});
