var cookie = require("cookie-signature");
const secret = "tobiiscool";
var val = cookie.sign("hello", secret);
console.log(val === "hello.DGDUkGlIkCzPz+C0B064FNgHdEjox7ch8tOBGslZ5QI"); //true
console.log(cookie.unsign(val, secret) === "hello"); //true
console.log(cookie.unsign(val, "luna")); //false
