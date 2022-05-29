const { open, close, read } = require("fs");
open("yeeyan.txt", "r", (err, fd) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("myfile isn't exist");
      return;
    }
    throw err;
  }
  try {
    readMyData(fd);
  } finally {
    close(fd, (err) => {
      if (err) throw err;
    });
  }
});

function readMyData(fd) {
  let buffers = Buffer.alloc(200);
  console.log("start reading data");
  read(fd, { buffers }, (err, bytesRead, buffer) => {
    if (err) console.error(err);
    else console.log(buffer.toString("utf8"));
  });
}
