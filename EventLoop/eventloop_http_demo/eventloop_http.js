const http = require("http");
const crypto = require("crypto");

const start = Date.now();
// const requestURL = "http://127.0.0.1:7000";
const requestURL = "http://localhost:7000";

function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash:", Date.now() - start);
  });
}
function doRequest() {
  http
    .request(requestURL, (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log("Request:", Date.now() - start);
      });
    })
    .end();
}
// doRequest();
// doRequest();
// doRequest();
// doRequest();
// doRequest();
// doRequest();
// doRequest();
// doRequest();

doRequest();
doHash();
doHash();
doHash();
doHash();

// while (true) {}
