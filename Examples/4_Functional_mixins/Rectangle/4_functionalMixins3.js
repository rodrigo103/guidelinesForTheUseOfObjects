const Rectangle = (newlength, newbreadth) => o => {
  let length = newlength;
  let breadth = newbreadth;
  

  return Object.assign({}, o, {
    length,
    breadth,
    getArea() {
      return length * breadth;
    }
  });
};

const printAll = () => o =>
  Object.assign({}, o, {
    printAll: () => {
      console.log(`length: ${o.length}`);
      console.log(`breadth: ${o.breadth}`);
      console.log(`area: ${o.getArea()}`);
    }
  });

const square = Rectangle(11, 14)({});
console.log(square.getArea());

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
// OR...
// import pipe from `lodash/fp/flow`;

const createRectangle = (breadth, length) =>
  pipe(
    Rectangle(breadth, length),
    printAll()
  )({});


const square2 = createRectangle(9, 9);
console.log(square2.getArea());
square2.printAll();
