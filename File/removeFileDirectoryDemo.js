const fs = require("fs");

// fs.rm("./test", { recursive: true }, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("remove test directory done");
// });

// fs.stat("./docs/fwefwef.txt", (err, stats) => {
//   console.log(err);
// });

// fs.exists("./docs/20211122.txt", (err) => {
//   if (err) throw err;

// } );

fs.open("./docs/20211122XXXXX.txt", "wx", (err, fd) => {
  if (err) {
    // if (err.code === "EEXIST") {
    //   console.error("myfile already exists");
    //   return;
    // }

    throw err;
  }

  try {
    console.log(fd);
  } finally {
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  }
});

// fs.exists("./docs/20211122asdasda.txt", (err) => {
//   console.log(err ? "it exists" : "no such file!");
// });

// fs.unlink("./docs/20211122.txt", (err) => {
//   // if (err) throw err;

//   console.log("刪除成功");
// });
