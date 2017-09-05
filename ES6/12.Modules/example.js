// Modules

// Common example
// math.js Export
export function sum(x, y){
  return x + y;
}
export var pi = 3.14;

// app.js Import
import * as math from 'math';
console.log(math.sum(1, math.pi));

// Export examples
export { var1, var2, var3 };
export { var1 as variable, var2 as secondVariable };
export let name1, name2;
export let cost = 10.5;

export default function(){
  // ...
};
export default function toString(){
  // ...
};

export * from student;
export { id, name } from student;
export { id as ID, name as Name } from student;

export const TYPE = 'Store';
export class{
  // ...
}


// moduleX.js
console.log('hola mundo');
export let a = 0;

// Import examples
import defaultMember from 'mod';
import myDefault, { b, c } from 'myMod';
import * as lib from 'mod';
import 'moduleX'; //hola mundo

moduleX.a // undefined
