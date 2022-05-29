const { open, close, write } = require("fs");
open("yeeyan.txt", "wx", (err, fd) => {
  if (err) {
    if (err.code === "EEXIST") {
      console.error("file already exists");
      return;
    }
    throw err;
  }
  try {
    writeMyData(fd);
  } finally {
    close(fd, (err) => {
      if (err) throw err;
    });
  }
});

function writeMyData(fd) {
  console.log("start writing data");
  write(fd, Buffer.from("我很帥"), (err) => {
    if (err) console.error(err);
    else console.log("done writing");
  });
}
