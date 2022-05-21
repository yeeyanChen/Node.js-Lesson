/**
 *
 * 當 thread pool size 為預設的 4 時
 */

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
doHash();
doHash();
// doHash();

/*
Hash: 1892
Hash: 1906
FS: 1908
Hash: 1930
Hash: 1932
*/
