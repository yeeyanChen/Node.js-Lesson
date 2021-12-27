const stream = require("stream");

const writable = new stream.Writable({
  // Write function with its
  // parameters
  write: function (chunk, encoding, next) {
    // Converting the chunk of
    // data to string
    console.log("test: " + chunk.toString());
    next();
  },
});

// Writing data
writable.write("hi", null, () => {
  console.log("write done");
});
