var resolvePromise;

this.promise = new Promise(function promiseExecutor(resolve) {
  resolvePromise = resolve;
});

console.log(resolvePromise.toString());
