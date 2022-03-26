Promise.resolve("good")
  .then(
    (val) => {
      console.log("第一層成功", val);
      //   return val;
      return Promise.reject("fail");
    },
    (err) => {
      console.log("第一層錯誤", err);
      return Promise.reject(err);
    }
  )
  .then(
    (val) => {
      console.log("第二層成功", val);
      //   return val;
      return Promise.reject("fail");
    },
    (err) => {
      console.log("第二層錯誤", err);
      return Promise.reject(err);
      // return "Yes";
    }
  )
  .then(
    (val) => {
      console.log("第三層成功", val);
      return val;
    },
    (err) => {
      console.log("第三層錯誤", err);
      return Promise.reject(err);
    }
  )
  .then((val) => {
    console.log("最後的成功", val);
    return val;
  })
  .catch((err) => {
    console.log("最後的錯誤", err);
  });
