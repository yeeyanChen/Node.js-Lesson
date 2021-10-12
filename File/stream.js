const fs = require("fs");
const readStream = fs.createReadStream("./docs/doc03.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/doc04.txt");

readStream.on("data", (chunk) => {
  console.log("----- NEW CHUNK -----");
  console.log(typeof chunk);
  // console.log(chunk.toString());
  // writeStream.write("\nNEW CHUNK\n");
  // writeStream.write(chunk);
});
