// Class definition

//Before
var Shape = function(id, x, y){
  this.id = id;
  this.move(x, y);
};
Shape.prototype.move = function(x, y){
  this.x = x;
  this.y = y;  
};

// Inheritance
var Rectangle = function(id, x, y, width, height){
  Shape.call(this, id, x, y);
  this.width = width;
  this.height = height;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Overrides
Rectangle.prototype.move = function(x, y){
  console.log('x: ' + x + ' y: '+ y);
  Shape.prototype.move.call(this, x, y);
}

var Circle = function(id, x, y, radius){
  Shape.call(this, id, x, y);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Static Members
Circle.getCircle = function(){
  return new Circle('circle1', 0, 0, 50);
}
var circle = Circle.getCircle();

// After
class Es6Shape {
  constructor(id, x, y){
    this.id = id;
    this.move(x, y);
  }
  // Gets and sets
  set id (id){
    this.id = id;
  }
  get id(){
    return this.id;
  }

  move(x, y){
    this.x = x;
    this.y = y;
  }
}

// Inheritance
class Es6Rectangle extends Es6Shape {
  constructor(id, x, y, width, height){
    super(id, x, y);
    this.width = width;
    this.height = height;
  }
  // Overrides
  move(x, y){
    console.log(`x: ${x} y: ${y}`);
    super.move(x, y);
  }
}

class Es6Circle extends Es6Shape {    
  constructor(id, x, y, radius){
    super(id, x, y);
    this.radius = radius;
  }
  // Static members
  static getCircle(){
    return new Es6Circle('circle1', 0, 0, 50);
  }
}

let es6Circle = Es6Circle.getCircle();

let shape = new Es6Shape('new shape1', 10, 20);
shape.id = 'new id';
