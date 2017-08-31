let a = 10;
let b = 10;

console.log(`The result is ${a+b}`); // The result is 20

function sayHello(){
  return 'Hello World';
}

console.log(`Say ${sayHello()} please.`);

console.log(`This is a backtild \``);

function inspect(words, ...keys){
  console.log('Words ', words); // Words: ['Hello', ', looking', '.']
  console.log('Keys ', keys); // Keys: ['Diego', 'great']
}

let you = 'Diego';
let adjective = 'great';

inspect `Hello ${you}, looking ${adjective}.`;
