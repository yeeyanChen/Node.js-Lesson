const express = require("express");
const cors = require("cors");

const app = express();

//listen for request
const port = 8080;
app.listen(port, () => {
  console.log(`Server is now listening at http://localhost:${port}`);
});

app.use(
  "/public/*",
  cors({
    origin: "http://localhost:3000",
  })
);
app.use("/public/", express.static(__dirname + "/public"));

app.options(
  "/cors",
  cors({
    origin: "http://localhost:3000",
    // credentials: true,
    // preflightContinue: true,
    // optionsSuccessStatus: 200,
  })

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
    // credentials: true,
    // exposedHeaders: "X-Yeeyan-Cool",
  })
  //     ,
  //   (req, res) => {
  //     res.set("X-Yeeyan-Cool", "yo");

  //     console.log("CORS GET");
  //     res.cookie("cors", "test");
  //     res.json({ name: "yee" });
  //   }
);

app.get("/", (req, res) => {
  res.sendFile("./html/index2.html", { root: __dirname });
});
