const MyTransform = require("./MyTransform");
const fs = require("fs");
const path = require("path");
const { log } = require("console");

const transformStream = new MyTransform();
const readStream = fs.createReadStream(path.resolve(__dirname, "./test.txt"));
readStream.pipe(transformStream).pipe(process.stdout);

transformStream.on("finish", () => {
  log("finished");
});
