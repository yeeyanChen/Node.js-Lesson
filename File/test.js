const fs = require("fs");

fs.readFile("./docs/TESTING-2.txt", "utf16le", (err, data) => {
  console.log(data); // 믯䮿
});

fs.readFile("./docs/TESTING-2.txt", "utf8", (err, data) => {
  console.log(data); //K
});

fs.readFile("./docs/TESTING-2.txt", (err, data) => {
  console.log(data); //<Buffer ef bb bf 4b>
});

// fs.chmod("./docs/LOL.txt", 0o666, () => {});

fs.readFile("./docs/LOL.txt", "base64", (err, data) => {
  console.log(data);
});
