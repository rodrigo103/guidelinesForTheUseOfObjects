const square = {
  length: 10,
  breadth: 10
};

function getArea(square) {
  return square.length * square.breadth;
}

function printAll(square) {
  console.log(`length: ${square.length}`);
  console.log(`breadth: ${square.breadth}`);
  console.log(`area: ${getArea(square)}`);
}

printAll(square);
console.log(typeof square, typeof getArea, typeof printAll);
