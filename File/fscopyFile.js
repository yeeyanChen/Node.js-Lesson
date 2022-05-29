const fs = require("fs");

fs.copyFile(
  "yeeyan.txt",
  "yeeyanCopy.txt",
  fs.constants.COPYFILE_EXCL,
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("successfully copied");
  }
);
