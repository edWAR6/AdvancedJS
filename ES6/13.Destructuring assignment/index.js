// Basic example with numbers
var x = [1, 2, 3, 4, 5];
var [y,z] = x;
console.log(y); //1
console.log(z); //2

// Basic example with strings
var foo = ['one', 'two', 'three'];
var [one, two, three] = foo;
console.log(one) // 'one'
console.log(two) // 'two'
console.log(three) // 'three'

// Assignment separate from declaration 
var a,b;

[a,b] = [1,2];
console.log(a); //1
console.log(b); //2

// Default values
var a,b;

[a=5, b=7] = [1];
console.log(a); //1
console.log(b); //7

// Swapping values

var a = 1;
var b = 2;

[a,b] = [b,a];
console.log(a); //2
console.log(b); //1

//Parsing values from functions

function foo(){
  return [1,2];
}
var a, b;
[a,b] = foo();
console.log(a); //1
console.log(b); //2

// Ignoring values

function bar(){
  return [1,2,3];
}

var [a, ,c,d] = bar();
console.log('Ignoring values');
console.log(a); //1
console.log(c); //3
console.log(d); //undefined
