const http = require("http");
const options = {
  host: "192.168.1.107",
  port: 8080,
  path: "/httppost",
  method: "POST",
  headers: { YEEYAN: "COOL!" },
};

const req = http.request(options, (res) => {
  res.setEncoding("utf8");
  console.log(res.headers);
  console.log(res.constructor); // IncomingMessage
  console.log(`statusCode: ${res.statusCode}`);
  console.log(`statusMessage: ${res.statusMessage}`);

  res.on("data", (chunk) => {
    // process.stdout.write(chunk);
    console.log("取得的回應:", chunk);
  });

  res.on("end", (chunk) => {
    console.log("No more data in response.");
  });
});
console.log(req.getHeader("content-length"));
req.end("fuck");
