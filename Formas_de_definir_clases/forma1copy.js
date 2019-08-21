// forma1.js modificado para que funcione
function Rectangle(length, breadth) {
  // Init variables length and breadth
  this.length = length;
  this.breadth = breadth;

  // Function to calculate area
  this.getArea = function() {
    return this.length * this.breadth;
  };
  // Function to print the data
  this.printAll = function() {
    console.log(`The length is: ${this.length}`);
    console.log(`The breadth is: ${this.breadth}`);
    console.log(`The area is: ${this.getArea()}`);
  };
}
const square = new Rectangle(10, 10); // Create object
console.log(square.getArea()); // Returns area, i.e. 100
square.printAll();
