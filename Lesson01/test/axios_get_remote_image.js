const axios = require("axios");
const { log } = require("console");
const fs = require("fs");

axios({
  method: "get",
  url: "http://bit.ly/2mTM3nY",
  responseType: "stream",
}).then(function (response) {
  log(response.data.constructor);
  response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
});
