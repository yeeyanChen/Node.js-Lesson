const { open, close, exists, unlink, read } = require("fs");
const readMyData = require("./readMyData");

const crypto = require("crypto");
function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {});
}

exists("myfile.txt", (e) => {
  console.log("isExist?", e);
  if (e) {
    console.log("start to opening myfile");

    open("myfile.txt", "r", (err, fd) => {
      if (err) throw err;
      try {
        readMyData(fd);
      } finally {
        close(fd, (err) => {
          if (err) throw err;
        });
      }
    });
  } else {
    console.error("myfile.txt does not exist");
  }
});

// doHash();
// doHash();
// doHash();
// doHash();
// setTimeout(() => {
console.log("start to unlink myfile");
unlink("myfile.txt", () => {
  console.log("unlink myfile successfully");
});
// }, 0);

/*每次執行的結果都不一樣，因為是非同步*/
/* 
start to unlink myfile
isExist? true
start to opening myfile
unlink myfile successfully
[Error: ENOENT: no such file or directory, open 'C:\web\Node.js\File\myfile.txt'
*/

/*
isExist? true
start to opening myfile
start to unlink myfile
start reading data
unlink myfile successfully
my file~~~
*/
