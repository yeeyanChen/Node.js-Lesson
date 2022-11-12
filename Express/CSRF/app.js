const express = require("express");
const csrf = require("csurf");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const csrfProtection = csrf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false });

const port = 3000;

app.set("view engine", "ejs");
app.use(cookieParser("12345"));

app.get("/testSignCookie", (req, res) => {
  res.cookie("testSignCookie", "daniel", { signed: true });
  res.setHeader("set-cookie", ["a=10", "b=20"]);

  res.send("testSignCookie");
});

app.get("/testSignCookie2", (req, res) => {
  console.log(req.secret);
  res.send("testSignCookie2");
});

app.get("/form", csrfProtection, (req, res) => {
  // 因為前面有 csrfProtection 這個 middleware，所以 req.csrfToken() 能夠取得 csrf token
  res.render("form", { csrfToken: req.csrfToken() });
});

app.post("/process", parseForm, csrfProtection, (req, res) => {
  console.log(req.cookies);
  res.send("data is being processed");
});

app.listen(port, () => {
  console.log(`Serve is now listening at http://localhost:${port}/form`);
});
