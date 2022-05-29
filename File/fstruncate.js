const fs = require("fs");

fs.truncate("./test1", (err) => {
  console.log(err);
});
