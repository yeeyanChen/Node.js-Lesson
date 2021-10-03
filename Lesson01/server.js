const http = require("http");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
// console.log(http);
// console.log( process.argv );

const sendResponse = (url, statusCode, response) => {
  fs.readFile(`./html/${url}`, (err, data) => {
    if (err) {
      //error when reading file
      response.statusCode = 500;
      response.setHeader("Content-Type", "text/plain");
      response.end("Sorry, internal error");
    } else {
      response.statusCode = statusCode;
      response.setHeader("Content-Type", "text/html");
      response.end(data);
    }
  });
};

const port = 5000;
const ip = "192.168.1.106"; //localhost //127.0.0.1

const server = http.createServer((request, response) => {
  //   console.log(request);
  //   console.log(response);
  let { url, method, headers } = request;
  console.log(headers);
  // console.log(request);
  // console.log(url); //此 url 會包含 query string

  let requestURL = new URL(url, `http://${ip}:${port}`);
  // console.log(requestURL);
  // console.log(requestURL.searchParams[Symbol.iterator]);
  let lang = requestURL.searchParams.get("lang");
  let selector = lang === "en" ? "" : lang === "zh-TW" ? "-zh-TW" : "";
  url = requestURL.pathname; //URL 實例的 pathname 不會包含 query string

  if (method === "GET") {
    switch (url) {
      case "/":
        sendResponse(`index${selector}.html`, 200, response);
        break;
      case "/about":
        sendResponse(`about${selector}.html`, 200, response);
        break;
      case "/login":
        sendResponse(`login/login${selector}.html`, 200, response);
        break;
      case "/login-success":
        sendResponse(`login/login-success${selector}.html`, 200, response);
        break;
      case "/login-fail":
        sendResponse(`login/login-fail${selector}.html`, 200, response);
        break;
      default:
        sendResponse(`404${selector}.html`, 404, response);
    }
  } else if (method === "POST") {
    if (url === "/process-login") {
      let body = [];

      //監聽緩衝區裡的數據是否可以讀取
      request.on("data", (chunk) => {
        body.push(chunk);
      });

      //監聽請求數據是否已經全部被讀取
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        body = qs.parse(body);

        if (body.username === "yeeyan" && body.password === "dan123") {
          response.statusCode = 301;
          response.setHeader("Location", "/login-success");
        } else {
          response.statusCode = 301;
          response.setHeader("Location", "/login-fail");
        }

        response.end();
      });
    }
  }
});

// console.log(server);

server.listen(port, ip, () => {
  console.log(`Server is running at http://${ip}:${port}`);
});
