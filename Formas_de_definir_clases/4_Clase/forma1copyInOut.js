// forma1.js modificado para que funcione. Metodos definidos dentro y fuera de la funcion.
function Rectangle(length, breadth) {
  this.length = length;
  this.breadth = breadth;

  this.getArea = function() {
    return this.length * this.breadth;
  };
}

Rectangle.prototype.printAll = function() {
  console.log(`The length is: ${this.length}`);
  console.log(`The breadth is: ${this.breadth}`);
  console.log(`The area is: ${this.getArea()}`);
};

const square = new Rectangle(10, 10);
console.log(square.getArea());
square.printAll();
