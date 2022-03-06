let parent = {};

Object.defineProperty(parent, "name", {
  value: "yeeyan",
  writable: false,
});

let child = Object.create(parent);

child.name = "Ian";

console.log(child.name); //yeeyan
console.log(parent.name); //yeeyan
