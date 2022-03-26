const axios = require("axios");
const qs = require("querystring");

console.log(Object.prototype.toString.call(process));
console.log(globalThis.unescape);

let params = {
  ID: 12345,
};
console.log(qs.stringify(params, { arrayFormat: "brackets" }));

const req = axios.create({
  baseURL: "http://localhost:8080/",
});

// req.interceptors.request.use(
//   (config) => {
//     console.log("請求發起前");
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// req.interceptors.request.use(
//   (config) => {
//     console.log("請求發起前2");
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// req.interceptors.response.use(
//   (config) => {
//     console.log("請求發起後");
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// req.interceptors.response.use(
//   (config) => {
//     console.log("請求發起後2");
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

req("")
  .then((res) => {
    // console.log(res.data);
    console.log(`statusCode: ${res.status}`);
    // console.log(res);
  })
  .catch((error) => {
    console.error(error.code);
  });

// axios
//   .get("http://localhost:8080/api", {
//     headers: {
//       Host: "",
//     },
//   })
//   .then((res) => {
//     // console.log(`data: ${res.data}`);
//     console.log(typeof res.data);
//     console.log(`statusCode: ${res.status}`);
//     // console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
