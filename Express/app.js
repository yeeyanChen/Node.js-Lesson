const express = require("express");

const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`Serve is now listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
