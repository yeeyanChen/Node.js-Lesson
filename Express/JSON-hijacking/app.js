const express = require("express");
const cors = require("cors");

const app = express();

//listen for request
const port = 8080;
app.listen(port, () => {
  console.log(`Server is now listening at http://localhost:${port}`);
});

app.options(
  "/users/balance",
  cors({
    origin: "http://127.0.0.1:4899/",
    credentials: true,
  })
);

app.get(
  "/users/balance",
  cors({
    origin: "http://127.0.0.1:4899/",
    credentials: true,
  }),
  (req, res, next) => {
    res.json([
      {
        userName: "jayden",
        balance: 1200,
      },
      {
        userName: "oscar",
        balance: 1200000,
      },
    ]);

    // res.json({
    //   a: 1,
    //   b: 2,
    // });
  }
);
