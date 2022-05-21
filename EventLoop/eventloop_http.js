const http = require("http");
const crypto = require("crypto");

const start = Date.now();

function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash:", Date.now() - start);
  });
}
function doRequest() {
  http
    .request("http://192.168.1.113:8080/eventlooptest", (res) => {
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
