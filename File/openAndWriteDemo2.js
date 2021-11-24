const fs = require("fs");

const buffer_init = Buffer.from("KFCBITCH");
const buffer_inserted = Buffer.from("Fuck~You Man");
const buffer_end = Buffer.from("Arcane_LOL");
console.log("buffer_init", buffer_init); //<Buffer ff fe 3d d8 0d de>
console.log("buffer_inserted", buffer_inserted); //<Buffer ff fe 3d d8 0d de>
console.log("buffer_end", buffer_end); //<Buffer ff fe 3d d8 0d de>
console.log("=============================================");

fs.open("./docs/openAndWriteDemo2.txt", "w", (err, fd) => {
  if (err) throw err;

  fs.write(
    fd,
    buffer_init,
    0,
    buffer_init.length,
    null,
    (err, bytesWritten, buffer) => {
      if (err) throw err;
      if (bytesWritten > 0) {
        console.log(bytesWritten + " 字元被寫入"); //8
        console.log(buffer_init); //<Buffer ff fe 3d d8 0d de>
        console.log(buffer_init.slice(2, bytesWritten + 1).toString()); //KFC is so nice!
      }
      fs.write(
        fd,
        buffer_inserted,
        0,
        buffer_inserted.length,
        2,
        (err, bytesWritten, buffer) => {
          // Close the opened file.
          if (err) throw err;
          if (bytesWritten > 0) {
            console.log(bytesWritten + " 字元被寫入"); //15
          }

          fs.write(
            fd,
            buffer_end,
            0,
            buffer_end.length,
            null,
            (err, bytesWritten, buffer) => {
              // Close the opened file.
              if (err) throw err;
              if (bytesWritten > 0) {
                console.log(bytesWritten + " 字元被寫入"); //15
              }

              fs.close(fd, function (err) {
                if (err) throw err;
              });
            }
          );

          // fs.close(fd, function (err) {
          //   if (err) throw err;
          // });
        }
      );

      // fs.close(fd, function (err) {
      //   if (err) throw err;
      // });
    }
  );
});
