const axios = require("axios");

fetch("http://localhost:8080/loginee")
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    // console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
