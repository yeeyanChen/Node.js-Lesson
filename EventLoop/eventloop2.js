// document.body.style = "background:blue";
console.log(1);
setTimeout(() => {
  console.log(5);
  //   document.body.style = "background:red";
}, 0);
Promise.resolve()
  .then(() => {
    console.log(2);
    // document.body.style = "background:black";
  })
  .then(() => {
    console.log(4);
    // document.body.style = "background:yellow";
  });
Promise.resolve().then(() => {
  console.log(6);
  // document.body.style = "background:black";
});

console.log(3);
