const Rectangle = (length, breadth) => {
  return {
    length: length,
    breadth: breadth,
    getArea() {
      return this.length * this.breadth;
    },
    printAll() {
      console.log(`The length is: ${this.length}`);
      console.log(`The breadth is: ${this.breadth}`);
      console.log(`The area is: ${this.getArea()}`);
    }
  };
};

const square = Rectangle(10, 10);
console.log(square);
console.log(square.getArea());
square.printAll();
