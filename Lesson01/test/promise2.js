let p = new Promise((resolve, reject) => {
  reject("Error 1");
  reject("Error 2");
})
  .then((val) => {
    console.log("成功", val);
  })
  .catch((err) => {
    console.log("失敗", err);
  });
