var escapeHtml = require("escape-html");
var express = require("express");
var session = require("express-session");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const cors = require("cors");

var app = express();

console.log("import.meta", import.meta);
app.use(cookieParser());

let corsOptions = {
  origin: ["http://localhost:3000"], // 改成 * 就能避免 Synchronizer token pattern 被駭客發出 CORS 偷取 CSRF token 的漏洞
  credentials: true,
};
app.use(cors(corsOptions));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // rolling: true,
    cookie: {
      maxAge: 3600000,
    },
  })
);

// middleware to test if authenticated
function isAuthenticated(req, res, next) {
  console.log("session id", req.session.id);
  // console.log("session user", req.session.user);
  if (req.session.user) next();
  else next("route");
}

app.get("/", isAuthenticated, function (req, res) {
  console.log("挾帶 cookie", req.cookies);

  // this is only called when there is an authentication user due to isAuthenticated
  res.send(
    "hello, " +
      escapeHtml(req.session.user) +
      "!" +
      ' <a href="/logout">Logout</a>'
  );
});

app.get("/cookie", isAuthenticated, function (req, res) {
  console.log(req.cookies);
  // this is only called when there is an authentication user due to isAuthenticated
  res.cookie("cookie-yee", "test", { path: "/cookie", sameSite: "strict" });
  res.send("Cookie There");
});

app.get("*", function (req, res) {
  console.log(req.url, "設定 login page");

  console.log(req.session.id);
  // if (!req.session.csrftoken) {
  //   let buf = crypto.randomBytes(256);
  //   let csrftoken = buf.toString("hex");
  //   req.session.csrftoken = csrftoken;
  // }

  res.send(
    '<form action="/login" method="post">' +
      'Username: <input name="user"><br>' +
      'Password: <input name="pass" type="password"><br>' +
      // `<input type="hidden" name="csrftoken" value="${req.session.csrftoken}"><br>` +
      '<input type="submit" text="Login"></form>'
  );
});

app.post(
  "/login",
  express.urlencoded({ extended: false }),
  function (req, res) {
    // login logic to validate req.body.user and req.body.pass
    // would be implemented here. for this example any combo works

    // regenerate the session, which is good practice to help
    // guard against forms of session fixation

    // console.log("body 的 csrf token", req.body.csrftoken);
    // console.log("session 的 csrf token", req.session.csrftoken);

    // if (req.body.csrftoken !== req.session.csrftoken) {
    //   console.log("session expired");
    //   res.send("Error");
    // } else {
    req.session.regenerate(function (err) {
      if (err) next(err);

      // store user information in session, typically a user id
      req.session.user = req.body.user;

      // save the session before redirection to ensure page
      // load does not happen before session is saved
      req.session.save(function (err) {
        if (err) return next(err);
        res.redirect("/");
      });
    });
    // }
  }
);

app.get("/logout", function (req, res, next) {
  // logout logic

  // clear the user from the session object and save.
  // this will ensure that re-using the old session id
  // does not have a logged in user
  req.session.user = null;
  req.session.save(function (err) {
    if (err) next(err);

    // regenerate the session, which is good practice to help
    // guard against forms of session fixation
    req.session.regenerate(function (err) {
      if (err) next(err);
      res.redirect("/");
    });
  });
});

const port = 5050;

app.listen(port, () => {
  console.log(`Server is now listening at http://localhost:${port}`);
});
