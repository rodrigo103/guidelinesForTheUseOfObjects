function Rectangle(length, breadth) {
  this.length = length;
  this.breadth = breadth;

  this.getArea = function() {
    return this.length * this.breadth;
  };
  this.printAll = function() {
    console.log(`The length is: ${this.length}`);
    console.log(`The breadth is: ${this.breadth}`);
    console.log(`The area is: ${this.getArea()}`);
  };

  return this;
}

const square = Rectangle(10, 10);
console.log(square);
console.log(square.getArea());
square.printAll();
