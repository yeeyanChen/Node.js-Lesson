let parent = {};

Object.defineProperty(parent, "name", {
  value: "yeeyan",
});

console.log(Object.getOwnPropertyDescriptor(parent, "name"));
/*
{
  value: 'yeeyan',
  writable: false,
  enumerable: false,
  configurable: false
}
 */
//因為 parent 的 name 屬性 writable 是 false，因此不能使用 Object.defineProperty(parent, "name") 或 = 賦值 來重新設定 name 的值

let child = Object.create(parent);
console.log(Object.getOwnPropertyDescriptor(child, "name")); //undefined

child.name = "Ian"; // 會根據原型鍊的 parent 的 name 屬性的 descriptor，因為 writable == false，所以 name 還是 yeeyan

console.log(child.name); //yeeyan

// 但在 child 上的這個 name 是新的 name 屬性，跟 parent 的 name 屬性不是同一個
Object.defineProperty(child, "name", {
  value: "Ian",
  writable: true,
});
console.log(Object.getOwnPropertyDescriptor(child, "name"));
/*
{
  value: 'Ian',
  writable: true,
  enumerable: false,
  configurable: false
}
*/

console.log(child.name); //Ian
console.log(parent.name); //yeeyan
