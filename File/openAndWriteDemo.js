const fs = require("fs");

const utf8string = "😍"; //<Buffer 3d d8 0d de>
const utf16buffer = Buffer.from(`\ufeff${utf8string}`, "utf16le");
console.log("utf16buffer", utf16buffer); //<Buffer ff fe 3d d8 0d de>

fs.open("./docs/openAndWriteDemo.txt", "w", (err, fd) => {
  if (err) throw err;

  fs.write(
    fd,
    utf16buffer,
    0,
    utf16buffer.length,
    0,
    (err, bytesWritten, buffer) => {
      if (err) throw err;
      if (bytesWritten > 0) {
        console.log(bytesWritten + " 字元被寫入"); //6
        console.log(buffer); //<Buffer ff fe 3d d8 0d de>
        console.log(buffer.slice(0, bytesWritten).toString("utf16le")); //ello Yeey
      }
      // Close the opened file.
      fs.close(fd, function (err) {
        if (err) throw err;
      });
    }
  );
});
