// Forma2 uso clases.
class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  getArea() {
    return this.length * this.breadth;
  }

  printAll() {
    console.log(`The length is: ${this.length}`);
    console.log(`The breadth is: ${this.breadth}`);
    console.log(`The area is: ${this.getArea()}`);
  }
}

const square = new Rectangle(10, 10); // Create object
console.log(square.getArea()); // Returns area, i.e. 100
square.printAll();
console.log(typeof Rectangle, typeof square, typeof square.printAll, typeof square.printAll);
console.log(Rectangle);
