const http = require("http");
const route = require("./route");
console.log(route);

async function onRequest(req, res) {
  const url = new URL(req.url, `http://${ip}:${port}`);
  const content = await route(url.pathname);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(content);
}

const server = http.createServer(onRequest);

const ip = "localhost";
const port = 5000;
server.listen(port, ip, () => {
  console.log(`Server is running at http://${ip}:${port}`);
});
