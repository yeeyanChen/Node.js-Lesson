var escapeHtml = require("escape-html");
var express = require("express");
var session = require("express-session");
const cookieParser = require("cookie-parser");

var app = express();

app.use(cookieParser());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // rolling: true,
    // cookie: {
    //   maxAge: 3000,
    // },
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
  res.send(
    '<form action="/login" method="post">' +
      'Username: <input name="user"><br>' +
      'Password: <input name="pass" type="password"><br>' +
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
