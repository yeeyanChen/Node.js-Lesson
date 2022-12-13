const express = require("express");
// var csrf = require("csurf");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const qs = require("qs");
var serveStatic = require("serve-static");

console.log(qs);
const fs = require("fs");
const path = require("path");

const app = express();

//register view engine
app.set("view engine", "ejs");

// 預設是 views 資料夾，可以透過此行來修改資料夾名稱
app.set("views", __dirname + "/myviews"); //設定 .ejs 存的路徑

//listen for request
const port = 3000;

app.listen(port, () => {
  console.log(`Serve is now listening at http://localhost:${port}`);
});

app.use(express.static(__dirname + "/public"));
app.use(
  "/assets",
  express.static(__dirname + "/assets", {
    setHeaders: setCustomCacheControl,
  })
);

// app.use(
//   morgan(function (tokens, req, res) {
//     console.log(tokens);
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, "content-length"),
//       "bytes",
//       "-",
//       tokens["response-time"](req, res),
//       "ms",
//     ].join(" ");
//   })
// );

var requestLogStream = fs.createWriteStream(
  path.join(__dirname, "./log/request.log"),
  {
    flags: "a",
  }
);

//app.use("dev");
app.use(morgan("combined", { stream: requestLogStream }));

app.use((req, res, next) => {
  console.log("First MiddleWare");
  next();
});

const users = [
  { name: "yeeyan", age: 24 },
  { name: "liung", age: 25 },
  { name: "faker", age: 18 },
];

app.get("/", (req, res) => {
  //   res.send("<h1>Home Page</h1>");
  res.setHeader("Cache-Control", "public, no-cache");

  res.render("index", { title: "yeeyan", users });
});

app.get("/about", (req, res) => {
  console.log(req.fresh);
  console.log(req.query);
  res.setHeader("Link", "</assets/footer.jpg>; rel=preload; as=image");
  res.render("about");
});

app.get("/csrfhacker", (req, res) => {
  res.render("csrfhacker");
});

app.get("/resourcehint", (req, res) => {
  res.render("resourcehint", { title: "yeeyan", users });
});

app.get("/deferunusedcss", (req, res) => {
  res.render("deferunusedcss", { title: "yeeyan", users });
});

app.get("/deferunusedcss2", (req, res) => {
  res.render("deferunusedcss2", { title: "yeeyan", users });
});

app.get("/fouc", (req, res) => {
  res.render("fouc", { title: "yeeyan", users });
});

app.get("/preconnect", (req, res) => {
  res.render("preconnect", { title: "yeeyan", users });
});

// app.get("/style.css", (req, res) => {
//   res.sendFile("./public/style.css", { root: __dirname });
// });

// app
//   .route("/events")
//   .all(function (req, res, next) {
//     console.log("events all");
//     res.send("events all");
//     // runs for all HTTP verbs first
//     // think of it as route specific middleware!
//   })
//   .get(function (req, res, next) {
//     res.json({ name: "yeeyan" });
//   });

//必須要在最下方
app.use((req, res) => {
  res.sendStatus(404);
  // res.status(404).render("404");
});

function setCustomCacheControl(res, path) {
  let mime = serveStatic.mime.lookup(path);
  console.log("setCustomCacheControl", mime);
  if (mime === "image/jpeg") {
    // Custom Cache-Control for image
    // res.setHeader(
    //   "Cache-Control",
    //   "public, max-age=5, stale-while-revalidate=3600"
    // );
    // res.setHeader("Cache-Control", "max-age=3600");
    // res.setHeader("Cache-Control", "no-store");
    // res.setHeader("Cache-Control", "max-age=60");
    // res.setHeader("Link", "; rel=preload; as=image");
    // res.setHeader("Cache-Control", "public, max-age=5");
    // res.setHeader("Cache-Control", "immutable");
  } else if (mime === "text/css") {
    // res.setHeader(
    //   "Link",
    //   "<http://localhost:3000/assets/style.css>; rel=preload; as=style"
    // );
  }
}
