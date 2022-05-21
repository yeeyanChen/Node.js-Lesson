const zlib = require("zlib");

const gzip = zlib.createGzip();
const fs = require("fs");
const { Readable } = require("stream");

const readStream = fs.createReadStream("./docs/doc03.txt");
const writeStream = fs.createWriteStream("./docs/doc03.gz");

// writeStream.end();
writeStream.on("finish", () => {
  console.log("finish");
});

writeStream.on("close", () => {
  console.log("close");
});

writeStream.on("pipe", () => {
  console.log("pipe");
});

writeStream.on("unpipe", () => {
  console.log("unpipe");
});

readStream.pipe(gzip).pipe(writeStream);

/*
pipe
finish
unpipe
close
*/
