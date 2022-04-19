let { http, maxRedirects } = require("follow-redirects");
console.log("default maxRedirects", maxRedirects);
maxRedirects = 2;

const options = {
  host: "192.168.1.107",
  port: 8080,
  // path: "/test",
  path: "/test-redirect-redirect",
  maxRedirects,
};

console.log("發送 GET 請求至 http://192.168.1.107/test-redirect-redirect");
const req = http.get(options, (res) => {
  res.setEncoding("utf8");
  console.log("res.req === req", res.req === req); //false  (就算沒有轉址也不會是同一個 ClientRequest 物件)
  let lastRequest = res.req;
  console.log(
    "最後請求的路徑",
    lastRequest.protocol + "://" + lastRequest.host + lastRequest.path
  );
  res.on("data", (chunk) => {
    // console.log(chunk);
  });

  res.on("end", (chunk) => {
    console.log("No more data in response.");
  });

  // res.on("error", (err) => {
  //   console.log(err.message);
  // });
});

// console.log(req);

req.on("error", (err) => {
  console.log(err.message); //Maximum number of redirects exceeded
});
