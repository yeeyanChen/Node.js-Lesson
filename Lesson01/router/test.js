let setPromise = function () {
  return new Promise((resolve, reject) => {
    // 你的異步code
    setTimeout(() => {
      resolve("success");
    }, 3000);
  });
};

async function home() {
  console.log("This is the home page.");

  await setPromise();

  return "END";
}

const content = home();
console.log("content", content);
console.log("GG");
