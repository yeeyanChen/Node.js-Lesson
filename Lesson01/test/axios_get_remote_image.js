const axios = require("axios");
const { log } = require("console");
const fs = require("fs");
/*
 當請求 https://localhost:446/sims/file.jsp?a=yeeyan&f=i553lFr5Ra%40%E5%AD%90%E7%91%9C02.jpg 這個 ragic local 的圖片時，
 因為那個網址沒有 https 認證的證書，所以需要設定這行，不要拒絕未認證的證書，才能請求成功。
 否則會報錯: Error: certificate has expired
 */
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const controller = new AbortController();
const signal = controller.signal;
axios({
  method: "get",
  // url: "http://bit.ly/2mTM3nY",
  url: "https://ap2.ragic.com/sims/file.jsp?a=yeeyan&f=EF4Sxc7R35%4004.jpg",
  // url: "https://ap2.ragic.com/sims/file.jsp?a=yeeyan&f=2404gPnRa0%40Vue3.png",
  // url: "https://localhost:446/sims/file.jsp?a=yeeyan&f=i553lFr5Ra%40%E5%AD%90%E7%91%9C02.jpg",
  // url: "https://localhost:446/sims/file.jsp?a=yeeyan&f=NI75fqn7QZ%40Vue3.png",
  // url: "http://192.168.1.107:8080/Vue3.png",
  // url: "https://huan-design.com/Vue3.png",
  // responseType: "stream",
  responseType: "arraybuffer",
  signal,
})
  .then(function (response) {
    console.log(response.data);
    // response.data.pipe(fs.createWriteStream("ada_lovelace.png"));
    // response.data.pipe(fs.createWriteStream("炭志郎.png"));
  })
  .catch(function (e) {
    console.log("幹", e);
  });

// controller.abort();
