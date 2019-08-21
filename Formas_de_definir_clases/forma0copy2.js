// Otra forma, intentando eliminar el return pero no funciona sin el.
const square = {
  length: 10,
  breadth: 10,
  getArea() {
    return (() => this.length * this.breadth)();
  }
};

console.log(`length: ${square.length}`);
console.log(`breadth: ${square.breadth}`);
console.log(`area: ${square.getArea()}`);
