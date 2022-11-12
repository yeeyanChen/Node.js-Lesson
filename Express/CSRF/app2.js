const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.headers);

  res.send("testSignCookie");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Serve is now listening at http://localhost:${port}`);
});
