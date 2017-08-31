// Before

// 1. Shorthands
  var obj = {x: x, y: y};

// 2. Computed properties
  var obj = {
    foo: 'bar',
    koo: 'fab'
  };
  obj[getPropertyName()] = 'xyz';

  console.log(obj.foo); // bar
  console.log(obj['foo']); // bar

  function getPropertyName(){
    return 'name' + 1 * Math.random();
  }

// 3. Method properties
  var obj = {
    foo: 'foo'
  };
  obj.sayHello = function(){}; // Error

// After

// 1. Shorthands
  let obj = {x, y};

// 2. Computed properties
  let obj = {
    foo: 'bar',
    koo: 'fab',
    [getPropertyName()]: 'xyz'
  };

// 3. Method properties
  var obj = {
    foo: 'foo',
    sayHello(){
      console.log('hello');
    }
  };
