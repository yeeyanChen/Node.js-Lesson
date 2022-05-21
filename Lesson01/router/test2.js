const bar = () => console.log("bar");

const baz = () => console.log("baz");

const foo = () => {
  console.log("foo");
  setTimeout(bar, 0);
  new Promise((resolve, reject) => {
    console.log("FUCK");
    resolve("should be right after baz, before bar");
  }).then((resolve) => console.log(resolve));
  baz();
};

foo();
console.log("GG");

const jojo = () => {
  console.log("jojo");
};

jojo();
