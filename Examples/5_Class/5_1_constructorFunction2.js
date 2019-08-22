// forma1.js modificado para que funcione
function Rectangle(length, breadth) {
  // Init variables length and breadth
  this.length = length;
  this.breadth = breadth;

  // Function to calculate area
  this.getArea = function() {
    console.log(this);
    console.log(typeof this);
    console.log(this.length);
    console.log(this.breadth);
    return this.length * this.breadth;
  };
}

// Function to print the data
Rectangle.prototype.printAll = function() {
  console.log(this);
  console.log(typeof this);
  console.log(this.length);
  console.log(this.breadth);
  console.log(`The length is: ${this.length}`);
  console.log(`The breadth is: ${this.breadth}`);
  console.log(`The area is: ${this.getArea()}`);
};

// Function to print the data
Rectangle.prototype.otrafuncion = () => {
  console.log(this);
  console.log(typeof this);
  console.log(this.length);
  console.log(this.breadth);
};

// Function to print the data
Rectangle.prototype.otrafuncion2 = () => {
  console.log(this);
  console.log(typeof this);
  console.log(this.length);
  console.log(this.breadth);
};

const square = new Rectangle(10, 10); // Create object
// console.log(square.getArea()); // Returns area, i.e. 100
const square2 = Rectangle(10, 10);
square.printAll();
square.otrafuncion();
console.log(square2);

console.log(Rectangle);
console.log(Rectangle.prototype);