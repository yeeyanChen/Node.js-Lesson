const stream = require("stream");

class CustomWritable extends stream.Writable {
  constructor(options) {
    super(options);
  }

  _write(chunk, encoding, callback) {
    const formattedChunk =
      this._writableState.objectMode === true ? JSON.stringify(chunk) : chunk;
    console.log(`Writing to stream: ${formattedChunk}`);
    callback(); // onwrite: flushes the buffer and emits 'drain' event
  }
}

module.exports = CustomWritable;
