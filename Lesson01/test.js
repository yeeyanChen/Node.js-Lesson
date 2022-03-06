// const YeeyanRequest = require("./YeeyanRequest");
// console.log(YeeyanRequest);

// const Yeeyan = require("./Yeeyan");
// console.log(Yeeyan);

const http = require("http");
const stream = require("stream");

console.log(http.METHODS);
console.log(http.STATUS_CODES);
console.log(
  stream.Writable.prototype.isPrototypeOf(http.OutgoingMessage.prototype)
);
console.log(
  stream.Readable.prototype.isPrototypeOf(http.IncomingMessage.prototype)
);
