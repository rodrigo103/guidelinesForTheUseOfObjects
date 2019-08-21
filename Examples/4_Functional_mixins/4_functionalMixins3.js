const Rectangle = o => {
  let length = 10;
  let breadth = 10;

  return Object.assign({}, o, {
    getArea() {
      return length * breadth;
    },
    printAll() {
      console.log(`length: ${length}`);
      console.log(`breadth: ${breadth}`);
      console.log(`area: ${this.getArea()}`);
    }
  });
};

const square = Rectangle({});
console.log(square.getArea());
square.printAll();
