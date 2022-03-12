const http = require("http");
const options = {
  // path: "/yeeyan/forms/1#!/1/6",
  host: "localhost",
  port: 8080,
  path: "/login",
};

const req = http.request(options, (res) => {
  res.setEncoding("utf8");
  console.log(res.statusCode);

  res.on("data", (chunk) => {
    console.log(chunk.length);
  });

  res.on("end", (chunk) => {
    console.log("No more data in response.");
  });
});

req.end();

// process.on("uncaughtException", function (err) {
//   console.log(err);
// });
