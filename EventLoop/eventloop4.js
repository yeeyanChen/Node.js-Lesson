const fs = require("fs");

fs.readFile("./test.txt", "utf8", (err, data) => {
  console.log(data);
});

while (true) {}
