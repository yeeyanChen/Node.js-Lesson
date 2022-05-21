const http = require("http");
const options = {
  host: "192.168.1.107",
  port: 8080,
  path: "/httppost",
  method: "POST",
  headers: { YEEYAN: "COOL!" },
};

const req = http.request(options, (res) => {
  res.setEncoding("utf16le");
  // console.log(res.headers);
  // console.log(res.constructor); // IncomingMessage
  // console.log(`statusCode: ${res.statusCode}`);
  // console.log(`statusMessage: ${res.statusMessage}`);

  res.on("data", (chunk) => {
    // process.stdout.write(chunk);
    console.log("取得的回應:", chunk);
  });

  res.on("end", (chunk) => {
    console.log("No more data in response.");
  });
});
// req.method = "POST";

req.setHeader("YEEYAN", "COOL!");
// console.log(req.getHeader("content-length"));
// console.log(req.getHeader("yeeyan"));
// console.log(req.constructor); //ClientRequest
console.log("req.writableEnded before", req.writableEnded);

req.end("믯䮿믯䮿", "utf16le", () => {
  console.log("[end] req.writableFinished", req.writableFinished);
  console.log("finish sending request1");
});
console.log("req.writableEnded", req.writableEnded);
console.log("req.writableFinished", req.writableFinished);

req.on("finish", () => {
  console.log("[finish] req.writableFinished", req.writableFinished);
  console.log("finish sending request2");
});

// req.destroy();
// req.on("error", (e) => {
//   console.log(e);
// });

// console.log(req.url);

// process.on("uncaughtException", function (err) {
//   console.log(err);
// });
