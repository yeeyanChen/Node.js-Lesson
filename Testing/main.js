var worker = new Worker("worker.js");
worker.addEventListener("message", function (msg) {
  console.log("Result from the worker:", msg.data); //Result from the worker:5
});
worker.postMessage([2, 3]);
