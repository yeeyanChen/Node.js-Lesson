const fs = require("fs");
module.exports.success = (request, response, filename) => {
  const readstream = fs.createReadStream(`./html/${filename}`);

  readstream.pipe(response);

  readstream.on("err", () => {
    response.statusCode = 500;
    response.setHeader("Content-Type", "text/plain");
    response.end("Sorry, internal error");
  });

  response.writeHead(200, { "Content-Type": "text/html" });
};
