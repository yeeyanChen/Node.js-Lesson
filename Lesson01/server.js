const http = require("http");
const fs = require("fs");
const stream = require("stream");
const path = require("path");
const qs = require("querystring");
const YeeyanRequest = require("./YeeyanRequest");

const sendResponse = (url, statusCode, response) => {
  console.log("response:", url);
  const readstream = fs.createReadStream(`./html/${url}`);

  readstream.pipe(response);

  // readstream.on("data", (chunk) => {
  //   response.write(chunk);
  // });

  // readstream.on("end", () => {
  //   response.end();
  // });

  readstream.on("err", () => {
    response.statusCode = 500;
    response.setHeader("Content-Type", "text/plain");
    response.end("Sorry, internal error");
  });

  response.on("finish", () => {
    console.log("response is finished");
  });

  let csp = "script-src 'self' 'unsafe-inline'";
  if (url === "test.html") {
    response.setHeader("Content-Security-Policy", csp);
  }

  response.writeHead(statusCode, { "Content-Type": "text/html" });
};

const sendResponseV2 = (url, statusCode, response) => {
  fs.readFile(`./html/${url}`, (err, data) => {
    if (err) {
      console.log(err);
      //error when reading file
      response.statusCode = 500;
      response.setHeader("Content-Type", "text/plain");
      response.end("Sorry, internal error");
    } else {
      response.statusCode = statusCode;
      let csp = "script-src 'self' 'unsafe-inline'";
      if (url === "test.html") {
        response.setHeader("Content-Security-Policy", csp);
      }
      // response.setHeader("Content-Type", "text/html");
      // response.setHeader("Content-Length", Buffer.byteLength(data));
      response.writeHead(200, { "Content-Type": "text/html" });
      console.log(response.getHeader("Content-Type")); //undefined
      response.end(data);
      response.on("finish", () => {
        console.log("response is finished");
      });
    }
  });
};

//see the image online
const sendImgResponse = (filename, statusCode, response) => {
  fs.readFile(`./img/${filename}`, (err, data) => {
    filename = encodeURIComponent(filename);
    if (err) {
      console.log(err);
      //error when reading file
      response.statusCode = 500;
      response.setHeader("Content-Type", "text/plain");
      response.end("Sorry, internal error");
    } else {
      response.statusCode = statusCode;

      response.setHeader(
        "Content-Disposition",
        `inline;filename*=utf-8''${filename};filename=${filename}`
      );
      response.setHeader("Content-Type", "image/png");
      response.end(data);
    }
  });
};
const ac = new AbortController();
const signal = ac.signal;
signal.onabort = () => {
  console.log("read request aborted");
};

//see the video online
const sendVideoResponse = (filename, statusCode, response) => {
  // setTimeout(function () {
  //   ac.abort();
  // }, 1);
  fs.readFile(`./videos/${filename}`, { signal }, (err, data) => {
    filename = encodeURIComponent(filename);
    if (err) {
      console.log(err);
      //error when reading file
      response.statusCode = 500;
      response.setHeader("Content-Type", "text/plain");
      response.end("Sorry, internal error");
    } else {
      response.statusCode = statusCode;

      response.setHeader(
        "Content-Disposition",
        `inline;filename*=utf-8''${filename};filename=${filename}`
      );
      // response.setHeader("Content-Type", "application/octet-stream");
      response.setHeader("Content-Type", "video/mp4");
      response.end(data);
    }
  });
};

const port = process.env.PORT || 8080;
const ip = "localhost";
// const ip = "192.168.1.107"; //localhost //127.0.0.1/
// const ip = "162.240.12.17"; //localhost //127.0.0.1/
// const ip = "https://my-nodejs-project-330710.de.r.appspot.com/"; //localhost //127.0.0.1

const server = http.createServer(
  //   {
  //     IncomingMessage: YeeyanRequest,
  //   },
  (request, response) => {
    // console.log("request.statusCode", request.statusCode);
    //   console.log(response);
    let { url, method, headers } = request;
    // console.log(url, method);
    // console.log(headers);
    // console.log(request);
    // console.log(url); //此 url 會包含 query string

    let requestURL = new URL(url, `http://${ip}:${port}`);
    // console.log(requestURL);
    // console.log(requestURL.searchParams[Symbol.iterator]);
    let lang = requestURL.searchParams.get("lang");
    let selector = lang === "en" ? "" : lang === "zh-TW" ? "-zh-TW" : "";
    url = requestURL.pathname; //URL 實例的 pathname 不會包含 query string
    url = decodeURIComponent(url);
    console.log(url, method);
    if (method === "GET") {
      switch (url) {
        case "/":
          sendResponse(`index${selector}.html`, 200, response);
          break;
        case "/about":
          sendResponse(`about${selector}.html`, 200, response);
          break;
        case "/promise":
          sendResponse(`promise${selector}.html`, 200, response);
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
        case "/test":
          sendResponse(`test.html`, 200, response);
          break;
        case "/api":
          // response.writeHead(200, { "Content-Type": "application/json" });
          response.end({ result: "success bitch" });
          // sendResponse(`test.html`, 200, response);
          break;
        case "/Vue3.png":
          sendImgResponse(`Vue3.png`, 200, response);
          break;
        case "/demo.mp4":
          sendVideoResponse(`demo.mp4`, 200, response);
          break;
        case "/不為誰而做的歌.MP4":
          sendVideoResponse(`不為誰而做的歌.MP4`, 200, response);
          break;
        case "/csrf_demo":
          sendResponse(`csrf_demo.html`, 200, response);
          break;
        default:
          sendResponse(`404${selector}.html`, 404, response);
      }
    } else if (method === "POST") {
      if (url === "/process-login") {
        let body = [];

        console.log(request);
        console.log(
          "request 是 stream.Readable 嗎????",
          request instanceof stream.Readable
        );

        console.log(
          "request 是 http.ClientRequest 嗎????",
          request instanceof http.ClientRequest
        );

        console.log(
          "response 是 stream.Writable 嗎????",
          response instanceof stream.Writable
        );

        console.log(
          "response 是 http.ServerResponse 嗎????",
          response instanceof http.ServerResponse
        );

        //監聽緩衝區裡的數據是否可以讀取
        request.on("data", (chunk) => {
          console.log("chunk", chunk);
          body.push(chunk);
        });

        //監聽請求數據是否已經全部被讀取
        request.on("end", () => {
          body = Buffer.concat(body).toString();
          console.log(body);
          body = qs.parse(body);

          //驗證登入
          if (body.username === "yeeyan" && body.password === "dan123") {
            response.statusCode = 301; // Moved Permanently (重定向後會改為 GET)
            response.setHeader("Location", "/login-success");
          } else {
            response.statusCode = 307; // Temporary Redirect (重定向後還是 POST)
            response.setHeader("Location", "/login-fail");
          }

          response.end();
        });
      } else if (url === "/login-fail") {
        //307 重導向後還是 POST
        sendResponse(`login/login-fail${selector}.html`, 200, response);
      }
    }
  }
);

// console.log(server);

server.listen(port, ip, () => {
  console.log(`Server is running at http://${ip}:${port}`);
});

// server.listen(port);
