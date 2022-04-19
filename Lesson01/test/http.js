const http = require("http");
const options = {
  // path: "/yeeyan/forms/1#!/1/6",
  host: "192.168.1.110",
  // host: "162.240.12.17",
  port: 8080,
  path: "/api",
  // method: "DELETE",
  // headers: { YEEYAN: "COOL!" },
};

const req = http.request(options, (res) => {
  res.setEncoding("utf16le");
  console.log(res.constructor); // IncomingMessage
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (chunk) => {
    // process.stdout.write(chunk);
    console.log(chunk);
  });

  res.on("end", (chunk) => {
    console.log("No more data in response.");
  });
});

req.setHeader("YEEYAN", "COOL!");
console.log(req.setDefaultEncoding);
console.log(req.setEncoding);
console.log(req.constructor); //ClientRequest
req.end();

// process.on("uncaughtException", function (err) {
//   console.log(err);
// });
