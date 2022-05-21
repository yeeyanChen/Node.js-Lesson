const axios = require("axios");

// 過了 1 秒沒回應的話，就會報錯: timeout of 1000ms exceeded
axios({
  method: "get",
  url: "http://192.168.1.107:8080/timeout",
  timeout: 1000,
})
  .then(function (response) {
    // response.data.pipe(fs.createWriteStream("ada_lovelace.png"));
    console.log(response.data);
  })
  .catch(function (e) {
    console.log(e.message); //timeout of 1000ms exceeded
  });
