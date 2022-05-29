const http = require("http");
const router = require("./router");
const route = require("./route");

const ip = "localhost";
const port = 7000;

const server = http.createServer((req, res) => {
  let { url, method } = req;
  let requestURL = new URL(url, `http://${ip}:${port}`);
  let pathname = requestURL.pathname;

  router(req, res, pathname, route);
});

server.listen(port, ip, () => {
  console.log(`Server is running at http://${ip}:${port}`);
});
