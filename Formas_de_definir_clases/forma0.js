// Obtenido desde: https://www.w3schools.com/js/js_object_methods.asp
const person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  printAll: function() {
    // Se puede hacer de esta forma
    // console.log(`first name: ${person.firstName}`);
    // console.log(`last name: ${person.lastName}`);
    // console.log(`id: ${person.id}`);
    // console.log(`Fullname: ${person.fullName()}`);

    // Pero es mas prolijo hacerlo de esta otra
    console.log(`first name: ${this.firstName}`);
    console.log(`last name: ${this.lastName}`);
    console.log(`id: ${this.id}`);
    console.log(`Fullname: ${this.fullName()}`);
  }
};

console.log(`first name: ${person.firstName}`);
console.log(`last name: ${person.lastName}`);
console.log(`id: ${person.id}`);
console.log(`Fullname: ${person.fullName()}`);

person.printAll();
