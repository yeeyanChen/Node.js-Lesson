//  function constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//  function constructor 的 prototype
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

Person.prototype.constructor = Person;
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "getFullName"));
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "constructor")); //enumerable: false

console.log("=================");

Object.defineProperty(Person.prototype, "id", {
  value: 5,
  writable: true,
  enumerable: false,
});

//  根據 function constructor 所建立的物件 Customer1
var person = new Person("John", "Doe");
//  透過for...in輸出
for (var prop in person) {
  console.log(prop + ": " + person[prop]);
}
console.log(
  "==================================================================="
);

function Teacher(tid, firstName, lastName) {
  Person.call(this, firstName, lastName);
  this.tid = tid;
}

Teacher.prototype = Object.create(Person.prototype);
// let originalConstructor = Teacher.prototype.constructor; //Person
// Teacher.prototype.constructor = Teacher;
Object.defineProperty(Teacher.prototype, "constructor", {
  value: Teacher,
});
// console.log(originalConstructor === Teacher.prototype.constructor);

console.log(Teacher.prototype.hasOwnProperty("constructor"));

var teacher = new Teacher(1, "John", "Doe", 26);

console.log(Object.getOwnPropertyDescriptor(Teacher.prototype, "constructor")); //enumerable: true

for (var prop in teacher) {
  console.log(prop + ": " + teacher[prop]);
}

console.log(Object.getOwnPropertyDescriptor(Teacher.prototype, "id"));
Teacher.prototype.id = 10;
console.log(Person.prototype.id); //5
console.log(Teacher.prototype.id); //10
console.log(Object.getOwnPropertyDescriptor(Teacher.prototype, "id"));
