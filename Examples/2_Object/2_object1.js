// Obtenido desde: https://www.w3schools.com/js/js_object_methods.asp
const square = {
  length: 10,
  breadth: 10,

  getArea: function() {
    return this.length * this.breadth;
  }
};

square.printAll = function() {
  console.log(`length: ${this.length}`);
  console.log(`breadth: ${this.breadth}`);
  console.log(`area: ${this.getArea()}`);
};

console.log(`length accessing property from outside: ${square.length}`);
console.log(`breadth accessing property from outside: ${square.breadth}`);
console.log(`area accessing property from outside: ${square.getArea()}`);

square.printAll();
console.log(typeof square, typeof square.getArea, typeof square.printAll);
