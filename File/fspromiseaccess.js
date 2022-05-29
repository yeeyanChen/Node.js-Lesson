const fsPromises = require("node:fs/promises");
const fs = require("fs");

// (async () => {
//   await fsPromises.writeFile("./writeFileDemo2.txt", "HELLO");
//   console.log("file wrote done");
// })();

(async () => {
  try {
    await fsPromises.access("./test1", fs.constants.F_OK);
    console.log("can access");
  } catch (e) {
    console.log(e);
    console.error("cannot access");
  }
})();
