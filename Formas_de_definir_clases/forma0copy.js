// Obtenido desde forma0.js, esta forma de escribirlo fue introducida en ES6 y permite omitir la palabra function. Es equivalente a la funcion flecha en que se origino en el mismo momento y para eliminar la palabra function, pero no permite eliminar el return como si lo logra la funcion flecha.
const person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  printAll() {
    console.log(`first name: ${this.firstName}`);
    console.log(`last name: ${this.lastName}`);
    console.log(`id: ${this.id}`);
    console.log(`Fullname: ${this.fullName()}`);
  }
};

person.printAll();
