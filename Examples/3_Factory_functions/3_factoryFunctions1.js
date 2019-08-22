function Rectangle(length, breadth) {
  return {
    length: length,
    breadth: breadth,
    getArea: function() {
      return this.length * this.breadth;
    }
  };
}

// Function to print the data
// Rectangle.prototype.otrafuncion = () => {
//   console.log(this);
//   console.log(typeof this);
//   console.log(this.length);
//   console.log(this.breadth);
// };

const square = Rectangle(10, 10);
const square2 = new Rectangle(10, 10);

square.printAll = function() {
  console.log(`length: ${this.length}`);
  console.log(`breadth: ${this.breadth}`);
  console.log(`area: ${this.getArea()}`);
};

square2.printAll = function() {
  console.log(`length: ${this.length}`);
  console.log(`breadth: ${this.breadth}`);
  console.log(`area: ${this.getArea()}`);
};

console.log(square);
console.log(square.getArea());
square.printAll();
// square2.otrafuncion();

console.log(square2);
console.log(square2.getArea());
square2.printAll();
// square2.otrafuncion();

console.log(Rectangle);
console.log(Rectangle.prototype);
console.log(Rectangle.prototype.otrafuncion);