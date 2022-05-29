const fs = require("fs");

fs.cp("./test1", "./test1_copy", { recursive: false }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("successfully copied ");
});

// fs.cp("yeeyan.txt", "yeeyanCopy.txt", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("successfully copied");
// });
