const { read } = require("fs");

module.exports = function readMyData(fd) {
  let buffers = Buffer.alloc(200);
  console.log("start reading data");
  read(fd, { buffers }, (err, bytesRead, buffer) => {
    if (err) console.error(err);
    else console.log(buffer.toString("utf8"));
  });
};
