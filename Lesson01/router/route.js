const pages = require("./pages");

function route(pathname) {
  let urlMapping = {};
  urlMapping["/"] = pages.home;
  urlMapping["/blog"] = pages.blog;

  if (typeof urlMapping[pathname] === "function") {
    return urlMapping[pathname]();
  } else {
    console.log("404 Not Found " + pathname);
    return "404 Not Found.";
  }
}

module.exports = route;
