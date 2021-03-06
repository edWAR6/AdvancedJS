'use strict'
function Person(name, lastName, age, gender){
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.sayHello = function(){
  alert(this.name);
}

function Teacher(name, lastName, age, gender, level, schoolName){
  Person.call(this, name, lastName, age, gender);
  this.level = level;
  this.schoolName = schoolName;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

var person1 = new Person('Eduardo', 'Oviedo', 32, 'Male');
var teacher1 = new Teacher('Angela', 'Lopez', 25, 'Female', 5, 'Cecropia school');
