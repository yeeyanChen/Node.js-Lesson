const fs = require("fs");

fs.open("./docs/doc01.txt", function (err, fd) {
  if (err) throw err;
  // console.log( "檔案開啟成功3!", fd );
  const buffer = new Buffer(1024);
  fs.read(fd, buffer, 0, 2, null, (err, bytesRead, buffer) => {
    if (err) throw err;
    if (bytesRead > 0) {
      console.log(bytesRead + " 字元被讀取");
      console.log(buffer.slice(0, bytesRead).toString());
      console.log(buffer);
    }
    fs.read(fd, buffer, 0, 3, -1, (err, bytesRead, buffer) => {
      if (bytesRead > 0) {
        console.log(bytesRead + " 字元被讀取");
        console.log(buffer.slice(0, bytesRead).toString());
        console.log(buffer);
      }
      // Close the opened file.
      fs.close(fd, function (err) {
        if (err) throw err;
      });
    });
  });
});
