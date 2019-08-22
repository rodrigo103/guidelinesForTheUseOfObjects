const Rectangle = (newlength, newbreadth) => o => {
  let length = newlength;
  let breadth = newbreadth;
  const getArea = () => length * breadth;

  return Object.assign({}, o, {
    length,
    breadth,
    getArea
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

// At this point we have two ways of creating the object:
const createRectangle = (breadth, length) =>
  pipe(
    Rectangle(breadth, length),
    printAll()
  )({});

// Or more compressed but more difficult to read
const createRectangle2 = (breadth, length) =>
  printAll()(Rectangle(breadth, length)({}));

const square2 = createRectangle(9, 9);
const square3 = createRectangle2(3, 4);
square2.printAll();
square3.printAll();
