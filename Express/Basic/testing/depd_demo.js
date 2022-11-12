const depd = require("depd");

const deprecate = depd("depd_demo");

module.exports.oldfunction = deprecate.function(function oldfunction() {
  // all calls to function are deprecated
  console.log("oldFunction");
});

module.exports.weirdfunction = function () {
  if (arguments.length < 2) {
    // calls with 0 or 1 args are deprecated
    deprecate("weirdfunction args < 2");
  }

  console.log("weirdfunction running");
};
