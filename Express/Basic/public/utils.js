function goodJob() {
  console.log("goodJob");
}

function test() {
  console.log("test");
}

window.addEventListener("click", () => {
  console.log("click~~~");
});
console.log("幹");

let d = Date.now();
window.onload = () => {
  // try {
  //   console.log("load 後", TRIM);
  // } catch (e) {
  //   console.error("load 後", e);
  // }
  console.log("load event~");
};

// while (Date.now() - d < 10000) {} // sleep 3s
console.log("dasdasd");

// throw new Error("this is the error happened in utils.js");
