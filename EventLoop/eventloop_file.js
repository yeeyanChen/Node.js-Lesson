/**
 *
 * 當 thread pool size 為 1 時
 */
process.env.UV_THREADPOOL_SIZE = 1;

const start = Date.now();
const crypto = require("crypto");
const fs = require("fs");
function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash:", Date.now() - start);
  });
}
fs.readFile("./test.txt", "utf8", () => {
  console.log("FS:", Date.now() - start);
});
doHash();

/*
  Hash: 767
  FS: 775
*/
