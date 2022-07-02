const express = require("express");
const cors = require("cors");

const app = express();

//listen for request
const port = 8080;
app.listen(port, () => {
  console.log(`Server is now listening at http://localhost:${port}`);
});

app.options(
  "/cors",
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    // preflightContinue: true,
    // optionsSuccessStatus: 200,
  })
  // ,
  // (req, res, next) => {
  //   console.log("只有在 preflightContinue 設定為 true 時才會執行這個 callback");
  //   res.status(200); // 改變 preflighted response 的 status code 為 200 (預設為 204)
  //   res.send();
  // }
);

app.get(
  "/cors",
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    exposedHeaders: "X-Yeeyan-Cool",
  }),
  (req, res) => {
    res.set("X-Yeeyan-Cool", "yo");

    console.log("CORS GET");
    res.cookie("cors", "test");
    res.json({ name: "yee" });
  }
);

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
