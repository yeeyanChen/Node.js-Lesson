const { Transform } = require("stream");

class MyTransform extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    let str = chunk.toString().replaceAll(/\r\n/g, "").toUpperCase();
    this.push(str);
    callback(null, " baby\r\n");
  }
}

module.exports = MyTransform;
