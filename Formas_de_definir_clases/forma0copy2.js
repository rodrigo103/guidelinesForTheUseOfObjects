// Otra forma, intentando eliminar el return pero no funciona sin el.
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName () {
    return (() => this.firstName + " " + this.lastName)();
  }
};

console.log(`first name: ${person.firstName}`);
console.log(`last name: ${person.lastName}`);
console.log(`id: ${person.id}`);
console.log(`Fullname: ${person.fullName()}`);
