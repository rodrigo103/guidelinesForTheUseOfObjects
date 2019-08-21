// forma1copy1.js modificado para que se declare el metodo fuera de la definicion de la funcion.
function Rectangle(length, breadth) {
  // Init variables length and breadth
  this.length = length;
  this.breadth = breadth;
}

// Function to calculate area
Rectangle.prototype.getArea = function() { 
  // console.log(this);
  // console.log(typeof this);
  // console.log(this.length);
  // console.log(this.breadth);
  return this.length * this.breadth;
}

Rectangle.prototype.printAll = function() { 
  console.log(`The length is: ${this.length}`);
  console.log(`The breadth is: ${this.breadth}`);
  console.log(`The area is: ${this.getArea()}`);
}

const square = new Rectangle(10, 10); // Create object
console.log(square.getArea()); // Returns area, i.e. 100
square.printAll();
