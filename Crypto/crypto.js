const crypto = require("crypto");

function MD5(text) {
  return crypto.createHash("md5").update(text).digest("hex"); //hex代表輸出為16進位，原先為buffer型態
}

function SHA1(text) {
  return crypto.createHash("sha1").update(text).digest("hex"); //hex代表輸出為16進位，原先為buffer型態
}

function SHA256(text) {
  return crypto.createHash("sha256").update(text).digest("hex"); //hex代表輸出為16進位，原先為buffer型態
}

let hashByMD5 = MD5("test");
console.log(hashByMD5);

let hashBySHA1 = SHA1("123456789");
console.log(hashBySHA1);

let hashBySHA256 = SHA256("test");
console.log(hashBySHA256);

console.log(SHA256("testasdasd"));

console.log(crypto.randomBytes(16).toString("hex"));
console.log(crypto.randomBytes(16).toString("utf16le"));

let salt = crypto.randomBytes(16).toString("hex");

// Hashing user's salt and password with 1000 iterations,

let password = "dan674";
let hash = crypto
  .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
  .toString(`hex`);

console.log(hash);
