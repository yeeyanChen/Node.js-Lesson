const axios = require("axios");
axios
  .delete("http://162.240.12.17:5000/api")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
