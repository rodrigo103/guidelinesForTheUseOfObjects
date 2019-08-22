function Rectangle(length, breadth) {
  this.length = length;
  this.breadth = breadth;

  this.getArea = function() {
    return this.length * this.breadth;
  };
  return this;
}

const square = Rectangle(10, 10);

square.printAll = function() {
  console.log(`length: ${this.length}`);
  console.log(`breadth: ${this.breadth}`);
  console.log(`area: ${this.getArea()}`);
};

console.log(square);
console.log(square.getArea());
square.printAll();
