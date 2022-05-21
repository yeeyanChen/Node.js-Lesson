const http = require("http");

const controller = new AbortController();
const signal = controller.signal;
const options = {
  host: "192.168.1.107",
  port: 8080,
  path: "/test",
  signal,
};

const req = http.request(options, (res) => {
  res.setEncoding("utf8");
  console.log("res.req === req", res.req === req); //true
  res.on("data", (chunk) => {
    // console.log("chunk");
  });

  res.on("end", (chunk) => {
    console.log("No more data in response.");
  });

  res.on("close", (chunk) => {
    console.log("response close");
  });
});

signal.onabort = () => {
  console.log("abort the signal");
};

req.on("finish", () => {
  console.log("finish");
});

req.on("close", (e) => {
  console.log("destroyed ? ", req.destroyed);
  console.log("aborted ? ", req.aborted);
});

req.on("error", (e) => {
  console.log("error when sending the request", e);
});

req.on("abort", (e) => {
  console.log("request aborted");
});

req.on("response", (res) => {
  console.log("response to this request", res.constructor);
});

// controller.abort();
// req.destroy();
// req.abort();

req.end();

// console.log(http.globalAgent);
