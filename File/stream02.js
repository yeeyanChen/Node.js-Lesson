const fs = require('fs');
const stream = require("stream");

let readStream = fs.createReadStream('./docs/english_utf8_bom.txt', {
    encoding: "utf8"
});


readStream.on("data", (chunk) => {
    console.log(chunk);
    console.log(fs.ReadStream);
});
