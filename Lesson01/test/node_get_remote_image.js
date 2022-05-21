var https = require("follow-redirects").https;
var fs = require("fs");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
var options = {
  method: "GET",
  hostname: "localhost",
  port: 446,
  path: "/sims/file.jsp?a=yeeyan&f=i553lFr5Ra%2540%25E5%25AD%2590%25E7%2591%259C02.jpg",
  headers: {
    Cookie: "JSESSIONID=node0r0dr0qscve4a1q4fy8hlk2hkw0.node0",
  },
  maxRedirects: 20,
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
