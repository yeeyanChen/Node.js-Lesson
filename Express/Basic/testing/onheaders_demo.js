const onHeaders = require("on-headers");
var express = require("express");
var parseUrl = require("parseurl");
var { oldfunction, weirdfunction } = require("./depd_demo");
var deprecate = require("depd")("onheaders_demo");
var debug = require("debug")("onheaders_demo");

oldfunction();

weirdfunction();
let count = 0;

const app = express();

count++;

//listen for request
const port = 8080;
app.listen(port, () => {
  console.log(`Server is now listening at http://localhost:${port}`);
});

function printSomething1(val) {
  console.log("set header 1~");
}

function printSomething2(val) {
  console.log("set header 2~");
}

app.get("/", (req, res, next) => {
  onHeaders(res, printSomething2);
  onHeaders(res, printSomething1);
  var originalPath = parseUrl.original(req).pathname;
  console.log(originalPath); //  /
  debug(req.method, req.url);

  res.set("Content-Type", "text/html");
  res.set("X-Content-y", "yyy");
  res.set("Content-Language", "zh-TW");
  res.send("hello");
});

app.get("/about", (req, res, next) => {
  var originalPath = parseUrl.original(req).pathname;
  console.log(originalPath); //  about
  deprecate("req.secret; provide secret option");

  res.send("about");
});
