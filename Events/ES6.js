//  function constructor
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
//  function constructor 的 prototype
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

Person.prototype.constructor = Person;
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "getFullName"));
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "constructor")); //enumerable: false  (繼承自 Object.prototype，因為 Object.prototype.constructor 的 enumerable 為 false)

//  根據 function constructor 所建立的物件 Customer1
var person = new Person("John", "Doe");
//  透過for...in輸出
for (var prop in person) {
  console.log(prop + ": " + person[prop]);
}
console.log(
  "==================================================================="
);

class Teacher extends Person {
  constructor(tid, firstName, lastName) {
    super(firstName, lastName);
    this.tid = tid;
  }
}

var teacher = new Teacher(1, "John", "Doe", 26);

console.log(Object.getOwnPropertyDescriptor(Teacher.prototype, "constructor")); //enumerable: false

for (var prop in teacher) {
  console.log(prop + ": " + teacher[prop]);
}
