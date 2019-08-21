// Same as 1_forma0.js but using arrow functions
const square = {
  length: 10,
  breadth: 10
};

const getArea = square => {
  return square.length * square.breadth;
};

const printAll = square => {
  console.log(`length: ${square.length}`);
  console.log(`breadth: ${square.breadth}`);
  console.log(`area: ${getArea(square)}`);
};

printAll(square);
console.log(typeof square, typeof getArea, typeof printAll);
