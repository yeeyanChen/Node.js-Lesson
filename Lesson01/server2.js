// Node.js program to demonstrate the
// server.setTimeout() APi

// Importing http module
var http = require("http");

// Setting up PORT
const PORT = process.env.PORT || 3000;

// Creating http Server
var server = http.createServer(function (request, response) {
  // Getting the reference of the
  // underlying socket object
  // by using socket API
  const value = response.socket;

  // Display result
  // by using end() api
  response.end("socket buffersize : " + value.bufferSize, "utf8", () => {
    console.log("Displaying the result...");
  });
});

// Listening to http Server
// by using listen() api
server.listen(PORT, () => {
  console.log(`Server is running at port 3000... at http://localhost:${PORT}`);
});

server.setTimeout(3000, () => {
  console.log("Socket is destroyed due to timeout");

  // Closing server
  // by using close() api
  server.close(() => {
    console.log("Server is closed");
  });
});
