const http = require("http");
const fs = require("fs");
const stream = require("stream");
const path = require("path");
const qs = require("querystring");
// const YeeyanRequest = require("./YeeyanRequest");

const sendResponse = (url, statusCode, request, response) => {
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
  console.log("發送的 Cookie", request.headers["cookie"]);

  if (url === "20220316.html") {
    response.setHeader("Set-Cookie", [
      "nameQ=yeeyan; sameSite=none; expires=" +
        new Date(new Date().getTime() + 86400000).toUTCString(),
      "school=NTCU; max-age=600",
    ]);

    if (request.headers["origin"]) {
      response.setHeader(
        "Access-Control-Allow-Origin",
        request.headers["origin"]
      );

      response.setHeader("Access-Control-Allow-Credentials", true);
    }
  } else if (url === "exposeHeader.html") {
    response.setHeader("X-Yeeyan", "test");
    response.setHeader("Access-Control-Expose-Headers", "X-Yeeyan");

    console.log("request headers", request.headers);
    if (request.headers["origin"]) {
      response.setHeader(
        "Access-Control-Allow-Origin",
        request.headers["origin"]
      );

      // response.setHeader("Access-Control-Allow-Credentials", true);
    }
  }
  response.writeHead(statusCode, { "Content-Type": "text/html" });
};

const sendResponseV2 = (url, statusCode, request, response) => {
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
const sendImgResponse = (filename, statusCode, request, response) => {
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
const sendVideoResponse = (filename, statusCode, request, response) => {
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
// const ip = "192.168.1.113"; //wifi ip
const ip = "localhost"; //localhost //127.0.0.1/
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
    // console.log(request.setHeader);  //undefined
    // console.log(url, method);
    // console.log(headers);
    // console.log(request);
    // console.log(url); //此 url 會包含 query string

    response.setTimeout(1000, () => {
      console.log("response time out");
    });
    // console.log(headers);
    console.log("url", url);
    let requestURL = new URL(url, `http://${ip}:${port}`);

    console.log(requestURL.protocol);
    // console.log(requestURL.searchParams[Symbol.iterator]);
    let lang = requestURL.searchParams.get("lang");
    let selector = lang === "en" ? "" : lang === "zh-TW" ? "-zh-TW" : "";
    url = requestURL.pathname; //URL 實例的 pathname 不會包含 query string
    url = decodeURIComponent(url);
    console.log("method", method);

    switch (method) {
      case "OPTIONS":
        if (request.headers["origin"]) {
          response.setHeader(
            "Access-Control-Allow-Origin",
            request.headers["origin"]
          );

          response.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE");
          response.setHeader(
            "Access-Control-Allow-Headers",
            "yeeyan,content-type"
          );
          // response.setHeader("Access-Control-Max-Age", 1 * 60);

          response.statusCode = 200;
          response.end();
        }
        break;
      case "GET":
        switch (url) {
          case "/":
            sendResponse(`index${selector}.html`, 200, request, response);
            break;
          case "/about":
            sendResponse(`about${selector}.html`, 200, request, response);
            break;
          case "/promise":
            sendResponse(`promise${selector}.html`, 200, request, response);
            break;
          case "/login":
            sendResponse(`login/login${selector}.html`, 200, request, response);
            break;
          case "/login-success":
            sendResponse(
              `login/login-success${selector}.html`,
              200,
              request,
              response
            );
            break;
          case "/login-fail":
            sendResponse(
              `login/login-fail${selector}.html`,
              200,
              request,
              response
            );
            break;
          case "/test":
            sendResponse(`test.html`, 200, request, response);
            break;
          case "/test-redirect":
            // http.get("./test");
            // 轉址
            response
              .writeHead(301, {
                Location: "/test",
              })
              .end();

            // sendResponse(`test.html`, 301, request, response);
            break;
          case "/test-redirect-redirect":
            // 轉址
            response
              .writeHead(301, {
                Location: "/test-redirect",
              })
              .end();
            break;
          case "/20220316":
            sendResponse(`20220316.html`, 200, request, response);
            break;
          case "/exposeHeader":
            sendResponse(`exposeHeader.html`, 200, request, response);
            break;
          case "/eventlooptest":
            setTimeout(() => {
              sendResponse(`index${selector}.html`, 200, request, response);
            }, 3000);

            break;
          case "/api":
            if (request.headers["origin"]) {
              response.setHeader(
                "Access-Control-Allow-Origin",
                request.headers["origin"]
              );
            }
            response.writeHead(200, { "Content-Type": "application/json" });
            // response.end("{'name':'yeeyan'}");  //Error: Unexpected token ' in JSON at position 1
            response.end('{"name":"yeeyan"}');

            break;
          case "/Vue3.png":
            sendImgResponse(`Vue3.png`, 200, request, response);
            break;
          case "/demo.mp4":
            sendVideoResponse(`demo.mp4`, 200, request, response);
            break;
          case "/不為誰而做的歌.MP4":
            sendVideoResponse(`不為誰而做的歌.MP4`, 200, request, response);
            break;
          case "/csrf_demo":
            sendResponse(`csrf_demo.html`, 200, request, response);
            break;
          case "/cancel-token":
            sendResponse(`cancel-token.html`, 200, request, response);
            break;
          case "/basic-auth":
            let basicAuth = request.headers["authorization"];
            console.log("Authorization request header", basicAuth);
            if (basicAuth && basicAuth.startsWith("Basic ")) {
              basicAuth = basicAuth.substring(6);
              basicAuth = Buffer.from(basicAuth, "base64").toString("utf8");
              console.log("basicAuth", basicAuth);
              let sec = basicAuth.split(":");
              if (
                sec.length == 2 &&
                sec[0] === "yeeyan" &&
                sec[1] === "dan860430"
              ) {
                sendResponse(`basic-auth-success.html`, 200, request, response);
              } else {
                sendResponse(
                  `basic-auth-unauthorized.html`,
                  401,
                  request,
                  response
                );
              }
            } else {
              response.setHeader("WWW-Authenticate", "Basic realm=QQ");
              sendResponse(
                `basic-auth-unauthorized.html`,
                401,
                request,
                response
              );
            }
            break;
          case "/fetch-redirect":
            sendResponse(`fetch-redirect.html`, 200, request, response);
            break;
          case "/timeout":
            // suspending , will throw time out error when config.timeout is set in axios
            break;
          default:
            sendResponse(`404${selector}.html`, 404, request, response);
        }
        break;
      case "POST":
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
        } else if (url === "/httppost") {
          if (request.headers["origin"]) {
            response.setHeader(
              "Access-Control-Allow-Origin",
              request.headers["origin"]
            );
          }

          console.log(
            `POST 的 body 長度: ${request.headers["content-length"]} bytes`
          );

          let body = "";
          console.log("req.setEncoding", request.setEncoding);
          // request.setEncoding("utf16le");
          // 接受到的 Buffer 物件為 <Buffer ef bb bf 4b ef bb bf 4b>
          request.setEncoding("utf8");
          request.on("data", (chunk) => {
            console.log("chunk", chunk); // KK
            body += chunk;
          });

          request.on("end", () => {
            response.statusCode = 200;
            response.writeHead(response.statusCode, {
              "Content-Type": "text/html",
            });
            response.end(body);
          });

          response.on("finish", () => {
            console.log("response is finished~~");
          });
        }

        break;
      case "DELETE":
        if (request.headers["origin"]) {
          response.setHeader(
            "Access-Control-Allow-Origin",
            request.headers["origin"]
          );
        }
        response.statusCode = 200;
        response.end();
    }
  }
);

// console.log(server);
server.setTimeout(1000, (soc) => {
  console.log("server is time out", soc.constructor); // server is time out  Socket {...}
});
server.listen(port, ip, () => {
  console.log(`Server is running at http://${ip}:${port}`);
});

// server.setTimeout(3000, () => {
//   console.log("Socket is destroyed due to timeout");

//   // Closing server
//   // by using close() api
//   server.close(() => {
//     console.log("Server is closed");
//   });
// });

// setTimeout(() => {
//   server.close(() => {
//     console.log(`Server is stopped at http://${ip}:${port}`);
//   });
// }, 2000);
// server.listen(port);
