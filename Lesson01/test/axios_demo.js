const axios = require("axios");

axios
  .get("http://localhost:8080/api", {
    headers: {
      Host: "",
    },
    responseType: "html",
  })
  .then((res) => {
    // console.log(`data: ${res.data}`);
    console.log(typeof res.data);
    console.log(`statusCode: ${res.status}`);
    // console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
