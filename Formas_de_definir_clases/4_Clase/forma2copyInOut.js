// Forma2 uso clases y defino los metodos dentro y fuera de la definicion de la clase.
class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  getArea() {
    return this.length * this.breadth;
  }
}

Rectangle.prototype.printAll = function() {
  console.log(`The length is: ${this.length}`);
  console.log(`The breadth is: ${this.breadth}`);
  console.log(`The area is: ${this.getArea()}`);
};

const square = new Rectangle(10, 10);
console.log(square.getArea());
square.printAll();
