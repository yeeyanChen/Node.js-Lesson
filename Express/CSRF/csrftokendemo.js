const crypto = require("crypto");

const secret = "JFR4y3lO-UBNjySt9e4TTsuN";
const salt = "P1Q9r7lY";

var EQUAL_GLOBAL_REGEXP = /=/g;
var PLUS_GLOBAL_REGEXP = /\+/g;
var SLASH_GLOBAL_REGEXP = /\//g;

function tokenize(secret, salt) {
  return salt + "-" + hash(salt + "-" + secret);
}

function hash(str) {
  return crypto
    .createHash("sha1")
    .update(str, "ascii")
    .digest("base64")
    .replace(PLUS_GLOBAL_REGEXP, "-")
    .replace(SLASH_GLOBAL_REGEXP, "_")
    .replace(EQUAL_GLOBAL_REGEXP, "");
}

console.log(tokenize(secret, salt));
console.log("P1Q9r7lY-z5Ev65Tzm9BqpD6ud1JWSP80lyM");

console.log(crypto.randomBytes(16).toString("hex"));
