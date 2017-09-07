'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Basic example with numbers
var x = [1, 2, 3, 4, 5];
var y = x[0],
    z = x[1];

console.log(y); //1
console.log(z); //2

// Basic example with strings
var foo = ['one', 'two', 'three'];

var _foo = _slicedToArray(foo, 3),
    one = _foo[0],
    two = _foo[1],
    three = _foo[2];

console.log(one); // 'one'
console.log(two); // 'two'
console.log(three); // 'three'

// Assignment separate from declaration 
var a, b;

a = 1;
b = 2;

console.log(a); //1
console.log(b); //2

// Default values
var a, b;

var _ref = [1];
var _ref$ = _ref[0];
a = _ref$ === undefined ? 5 : _ref$;
var _ref$2 = _ref[1];
b = _ref$2 === undefined ? 7 : _ref$2;

console.log(a); //1
console.log(b); //7

// Swapping values

var a = 1;
var b = 2;

var _ref2 = [b, a];
a = _ref2[0];
b = _ref2[1];

console.log(a); //2
console.log(b); //1

//Parsing values from functions

function foo() {
  return [1, 2];
}
var a, b;

var _foo2 = foo();

var _foo3 = _slicedToArray(_foo2, 2);

a = _foo3[0];
b = _foo3[1];

console.log(a); //1
console.log(b); //2

// Ignoring values

function bar() {
  return [1, 2, 3];
}

var _bar = bar(),
    _bar2 = _slicedToArray(_bar, 4),
    a = _bar2[0],
    c = _bar2[2],
    d = _bar2[3];

console.log('Ignoring values');
console.log(a); //1
console.log(c); //3
console.log(d); //undefined
