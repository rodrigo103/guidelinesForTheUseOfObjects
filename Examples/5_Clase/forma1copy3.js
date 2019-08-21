// forma1copy2.js modificado para que haga uso de una arrow function, pero no funciona porque no recibe el contexto crrecto desde el this.
function Rectangle(length, breadth) {
  // Init variables length and breadth
  this.length = length;
  this.breadth = breadth;
}

// Function to calculate area
Rectangle.prototype.getArea = () => {
  console.log(this);
  console.log(typeof this);
  console.log(this.length);
  console.log(this.breadth);
  return this.length * this.breadth;
};

const square = new Rectangle(10, 10); // Create object
console.log(square.getArea()); // Returns area, i.e. 100
