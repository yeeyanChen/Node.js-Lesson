const util = require("util");


function Person (name, age) {
    this.name = name;
    this.age = age;

    this.getName = () => {
        return this.name;
    }
}

Person.prototype.showName = function() {
    return this.name + ' showed';
}

Person.prototype.favoriteMovie = "Arcane";

let person = new Person("yeeyan", 24);

console.log(person.getName());
console.log(person.showName());

function Student (name, age, stid) {
    this.stid = stid;
    this.name = name;
    this.age = age;
} 

util.inherits(Student, Person);

let student = new Student("george", 26, "000A");
// console.log(student.getName());
console.log(student.showName());
console.log(student.favoriteMovie);