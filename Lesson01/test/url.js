// let m = "https://developer.mozilla.org";
// let b = new URL(m);
// let d = new URL("/en-US/docs", b);
// console.log(b.href);
// console.log(d.href);

// let e = new URL("LOL", "");
// console.log(e.href);

// // https://developer.mozilla.org/en-US/LOL
// console.log(new URL("LOL", "https://developer.mozilla.org/en-US/docs").href);
// // https://developer.mozilla.org/LOL
// console.log(new URL("/LOL", "https://developer.mozilla.org/en-US/docs").href);
// console.log(process);

const url = require("url");

let uri = "https://google.com/index.html?lang=zh-TW&foo=bar";
let result = url.parse(uri, true);
console.log(result instanceof url.Url);
