// En un nuevo intento de hacerlo funcionar con arrow function descubro que no funciona.
function Rectangle(length, breadth) {
  // Init variables length and breadth
  this.length = length;
  this.breadth = breadth;
  
  // Function to calculate area
  getArea = () => { 
    console.log(this.length);
    console.log(this.breadth);
    return this.length * this.breadth;
  };

  printAll = () => {
    console.log(`The length of the rectangle is: ${square.length}`);
    console.log(`The breadth of the rectangle is: ${square.breadth}`);
    console.log(`The area of the rectangle is: ${square.getArea()}`);
  };
};

const square = new Rectangle(10, 10);
square.printAll();
