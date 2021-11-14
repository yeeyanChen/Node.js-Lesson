const fs = require("fs");

fs.appendFile("./docs/LOL.txt", "", function (err) {
  console.log(err);
});
