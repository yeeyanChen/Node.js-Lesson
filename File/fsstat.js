const fs = require("fs");
fs.stat("./yeeyan.txt", (err, stats) => {
  console.log("yeeyan.txt", stats.birthtime);
});

fs.stat("./yeeyanNew.txt", (err, stats) => {
  console.log("yeeyanNew.txt", stats.birthtime);
});

fs.lstat("./yeeyanNew.txt", (err, stats) => {
  console.log("l yeeyanNew.txt", stats.birthtime);
});
