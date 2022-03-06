const http = require("http");

class YeeyanRequest extends http.IncomingMessage {
  constructor(...args) {
    super(...args);
  }
}

module.exports = YeeyanRequest;
