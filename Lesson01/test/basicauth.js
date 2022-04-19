const axios = require("axios");
axios
  .get("http://192.168.1.107:8080/basic-auth", {
    auth: {
      username: "yeeyan",
      password: "dan860430",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

// const qs = require("querystring");

// let params = {
//   a: 1,
//   b: 2,
// };
// console.log(qs.stringify(params, { arrayFormat: "repeat" }));
