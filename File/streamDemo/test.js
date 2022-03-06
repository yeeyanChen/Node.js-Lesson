(function () {
  //   if (typeof globalThis === "object") return;
  Object.defineProperty(Object.prototype, "__magic__", {
    get: function () {
      //   console.log(global === this); //true
      //   console.log(Object.prototype === this); // false
      return this; // 此時的 this 為 Object.prototype
    },
    configurable: true, // This makes it possible to `delete` the getter later.
  });

  //   Object.prototype.__magic__;
  //   global.__magic__;
  __magic__.globalFuck = __magic__;
  delete Object.prototype.__magic__;
})();

console.log(globalFuck === global); //true
// console.log(globalFuck === globalThis); //true
// console.log(Object.prototype.isPrototypeOf(globalFuck)); //true

// console.log(Object.prototype.__magic__ === global.__magic__); //true
// console.log(Object.prototype === global); //false

// console.log(__magic__);

// console.log(global.__proto__.__proto__ === Object.prototype);
// console.log(global.constructor.name);

// let ob = { a: 1, b: 2 };

// (function () {
//   Object.defineProperty(ob, "mail", {
//     get: function () {
//       return this;
//     },
//     configurable: true, // This makes it possible to `delete` the getter later.
//   });

//   console.log(ob.mail);
// })();

console.log(Buffer.from([0xe2, 0x82, 0xac]).toString()); //€
console.log(Buffer.from([0xe2, 0x82]).toString()); //�
