const fs = require("fs");
// fs.appendFile("./docs/doc02.txt", "Hello Yeeyan!", () => {
//   console.log("append file done!");
// });

// console.log("Fuck");

// console.log(new Date().toLocaleString());
// [...Array(10)].forEach(function (item, index) {
//   fs.appendFile("./docs/append.txt", index + "\n", function (err) {
//     if (err) console.log(err);
//   });
// });
// console.log(new Date().toLocaleString());

if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    console.log(err);
  });
} else {
  fs.writeFile("./docs/deleteme.txt", "Hello", (err, data) => {
    console.log("create new deleteme.txt");
  });
}
