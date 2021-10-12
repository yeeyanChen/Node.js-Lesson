//以下的 self 可以省略

console.log(self);
console.log(this === self);
(function () {
  "use strict";
  console.log(this);
})();
self.addEventListener("message", function (msg) {
  console.log("Worker received arguments:", msg.data); //Worker received arguments:[2, 3]
  self.postMessage(msg.data[0] + msg.data[1]);
});
