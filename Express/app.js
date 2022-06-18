const express = require("express");

const app = express();

//listen for request
const port = 3000;
app.listen(port, () => {
  console.log(`Serve is now listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  //   res.send("<h1>Home Page</h1>");
  res.sendFile("./html/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./html/about.html", { root: __dirname });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/socket-demo", (req, res) => {
  res.sendFile("./html/socket-demo.html", { root: __dirname });
});

//必須要在最下方
app.use((req, res) => {
  res.status(404).sendFile("./html/404.html", { root: __dirname });
});
