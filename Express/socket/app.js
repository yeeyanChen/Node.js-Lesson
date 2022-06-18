const express = require("express");

const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 5000;

app.get("/", (req, res) => {
  res.sendFile("/socket-demo.html", { root: __dirname });
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("chat message", (user, msg) => {
    console.log("message: " + msg);
    console.log("user: " + user);
    io.emit("chat message", user, msg);

    socket.broadcast.emit("hi~ (排除送出者)", user, msg);
    socket.emit("hi~ (送出者)", user, msg);
  });
});

server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
