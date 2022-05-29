const { success } = require("./sendResponse");
module.exports = {
  "/": {
    file: "index.html",
    to: setTimeout.bind(null, success, 500),
    // to: success,
  },
};
