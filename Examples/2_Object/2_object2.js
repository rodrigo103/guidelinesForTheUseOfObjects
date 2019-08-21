// Obtenido desde forma0.js, esta forma de escribirlo fue introducida en ES6 y permite omitir la palabra function. Es equivalente a la funcion flecha en que se origino en el mismo momento y para eliminar la palabra function, pero no permite eliminar el return como si lo logra la funcion flecha.
const square = {
  length: 10,
  breadth: 10,

  getArea() {
    return this.length * this.breadth;
  }
};
// this implementation brings problems with the use of the arrow function.
square.printAll = () => {
  console.log(`length: ${this.length}`);
  console.log(`breadth: ${this.breadth}`);
  console.log(`area: ${this.getArea()}`);
};

square.printAll();
console.log(typeof square, typeof square.getArea, typeof square.printAll);
