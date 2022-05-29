const { open, close, write } = require("fs");

let data = "我很帥";
open("yeeyan.txt", "w", (err, fd) => {
  if (err) {
    if (err.code === "EEXIST") {
      console.error("file already exists");
      return;
    }
    throw err;
  }
  try {
    writeMyData(fd, data);
  } finally {
    close(fd, (err) => {
      if (err) throw err;
    });
  }
});

function writeMyData(fd, data) {
  console.log("start writing data");
  write(fd, Buffer.from(data), (err) => {
    if (err) console.error(err);
    else console.log("done writing");
  });
}
