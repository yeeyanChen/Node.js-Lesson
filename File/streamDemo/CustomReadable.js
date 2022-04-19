const stream = require("stream");

class CustomReadable extends stream.Readable {
  constructor(data, options) {
    super(options);
    this.data = data;
  }

  _read(size) {
    if (this.data.length) {
      let pushLen = size;
      // console.log("● data: " + this.data);

      // this.push(chunk, "utf16le");
      // console.log("chunk", chunk);

      // let chunk = this.data.substr(0, pushLen);
      // this.data = this.data.slice(pushLen);
      // let isFull = this.push(chunk);

      let state = this._readableState;
      if (state.length + pushLen < state.highWaterMark) {
        let chunk = this.data.substr(0, pushLen);
        this.data = this.data.slice(pushLen);
        let isFull = this.push(chunk);
      } else if (state.length < state.highWaterMark) {
        pushLen = state.highWaterMark - state.length;
        let chunk = this.data.substr(0, pushLen);
        this.data = this.data.slice(pushLen);
        let isFull = this.push(chunk);
      } else {
        this.push();
      }
      this._readableState.reading = false;
    } else {
      // this.push(null);
    }
  }
}

module.exports = CustomReadable;
