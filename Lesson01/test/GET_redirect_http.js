const http = require("http");

const options = {
  host: "192.168.1.107",
  port: 8080,
  path: "/test-redirect-redirect",
};

const req = http.get(options, (res) => {
  res.setEncoding("utf8");
  console.log(res.req === req); //true
  res.on("data", (chunk) => {
    console.log(chunk);
  });

  res.on("end", (chunk) => {
    console.log("No more data in response.");
  });
});
