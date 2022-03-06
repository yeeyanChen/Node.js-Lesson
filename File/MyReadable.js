const stream = require("stream");

class MyReadable extends stream.Readable {
  constructor(data, options) {
    super(options);
    this.data = data;
  }

  _read(size) {
    // console.log("data", this.data);
    if (this.data.length) {
      const chunk = this.data.slice(0, size);
      this.data = this.data.slice(size, this.data.length);
      // console.log("chunk", chunk);
      let canContinuePushData = this.push(chunk);
      // console.log("canContinuePushData?", canContinuePushData);
    } else {
      this.push(null);
    }
  }
}

module.exports = MyReadable;
