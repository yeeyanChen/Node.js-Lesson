const axios = require("axios");

const config = {
  maxRedirects: 2,
  // validateStatus: function (status) {
  //   return status >= 200 && status < 400; // default
  // },
};
// async () => {
//   const res = await axios.get("http://192.168.1.107:8080/test-redirect", config);
//   console.log(res.data);
// };

axios
  .get("http://192.168.1.107:8080/test-redirect-redirect", config)
  .then((res) => {
    console.log(res.data);
    // console.log(res.request); //ClientRequest
    let lastRequest = res.request;
    console.log(
      "最後重導向的網址",
      lastRequest.protocol + "://" + lastRequest.host + lastRequest.path
    );
    console.log(res.request._redirectable._redirectCount); //重導向的次數
    console.log(res.request.constructor); //ClientRequest
  })
  .catch((err) => {
    console.log(err.message); //Request failed with status code 301
  });
