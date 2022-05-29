const { writeFile } = require("fs");

writeFile("yeeyan.txt", "", { flag: "wx" }, function (err) {
  if (err) console.error(err);
});
