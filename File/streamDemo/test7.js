// let obj = { name: "yee" };

// console.log(obj.hasOwnProperty("name")); //true

// obj.hasOwnProperty = () => false;

// console.log(obj.hasOwnProperty("name")); //false

// let person = { name: "QQ" };

// console.log(person.hasOwnProperty("name")); //true

// console.log(
//   Object.getOwnPropertyDescriptor(Object.prototype, "hasOwnProperty")
// );

var obj2 = {
  [Symbol.toPrimitive](hint) {
    console.log(hint);
    if (hint == "number") {
      return 10;
    }
    if (hint == "string") {
      return "hello";
    }
    return true;
  },
};
console.log(+obj2); // 10        -- hint is "number"
console.log(`${obj2}`); // "hello"   -- hint is "string"
console.log(obj2 + ""); // "true"    -- hint is "default"
