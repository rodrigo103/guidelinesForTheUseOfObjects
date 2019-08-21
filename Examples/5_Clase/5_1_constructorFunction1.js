// Original desde: https://hackernoon.com/moving-from-class-ical-languages-to-javascript-1dfa978ddcae No funciona.
function Rectangle(length, breadth) {
  // Init variables length and breadth
  this.length = length;
  this.breadth = breadth;
  
  // Function to calculate area
  this.getArea() { 
    return this.length * this.breadth;
  }
}
const square = new Rectangle(10, 10); // Create object
console.log(square.getArea()); // Returns area, i.e. 100
