// process.env.UV_THREADPOOL_SIZE = 1;

const crypto = require("crypto");
const start = Date.now();

// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("1:", Date.now() - start);
// });

// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("2:", Date.now() - start);
// });

crypto.pbkdf2Sync("a", "b", 100000, 512, "sha512");

console.log("1:", Date.now() - start);

crypto.pbkdf2Sync("a", "b", 100000, 512, "sha512");

console.log("2:", Date.now() - start);

console.log("done");
// 1: 786 ms
// 2: 1588 ms
