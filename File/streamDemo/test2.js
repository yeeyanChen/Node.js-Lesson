// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let person = new Person("yeeyan", 24);
// console.log(person.name); //yeeyan
// console.log(person.age); //24

// let { name, age } = person;
// console.log(name);
// console.log(age);

// const EventEmitter = require("events");
// const elem = new EventEmitter();

// elem.on("hello", (data) => {
//   console.log("hello ~", data);
// });

// elem.on("hello", (data) => {
//   console.log("hello 2~", data);
// });

// elem.emit("hello", "yeeyan");
// // hello ~yeean

// const EventEmitter = require("events");
// const elem = new EventEmitter();

// elem.on("newListener", function (event, listener) {
//   console.log(event, listener);
// });

// elem.on("hello", function sayHello02() {
//   console.log("sayHello02");
// });
