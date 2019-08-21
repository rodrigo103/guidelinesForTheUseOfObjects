
# Object guidelines

Javascript is not a class based language, is a multi paradigm programming language wich supports prototype based Object Oriented Programming (OOP) .
This gives us several different ways to work with objects.
But in general, the following guideline should be followed:

"Start with the simplest implementation and move to more complex implementations only as required:  
Functions > objects > factory functions > functional mixins > classes"
<https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c>

I will try to generate examples and collect all the pro and cons of the different implementations and why we choose to follow the previous guideline.

"You should always use the simplest possible abstraction to solve the problem you’re working on. Start with a pure function. If you need an object with persistent state, try a factory function. If you need to build more complex objects, try functional mixins."  
<https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c>

## Functions

The functions should be pure functions:

- Each input combination correstpond to exactly one output.
- They only depend on the input data.
- They do not alter the input data. (Inmutability)

They should not produce any side effect, that means, they should not modify the state the program.

<https://codeburst.io/functional-programming-in-javascript-e57e7e28c0e5>

``` js
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
```

After ES6 we can write:

``` js
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
```

## Objects

``` js
const square = {
  length: 10,
  breadth: 10,

  getArea: function() {
    return this.length * this.breadth;
  },
  printAll: function() {
    console.log(`length: ${this.length}`);
    console.log(`breadth: ${this.breadth}`);
    console.log(`area: ${this.getArea()}`);
  }
};

square.printAll();
```

Thanks to ES6 we can avoid the function keyword and write instead:

``` js
const square = {
  length: 10,
  breadth: 10,

  getArea() {
    return this.length * this.breadth;
  },
  printAll() {
    console.log(`length: ${this.length}`);
    console.log(`breadth: ${this.breadth}`);
    console.log(`area: ${this.getArea()}`);
  }
};

square.printAll();
```

## Factory functions

It is not possible to add Methods to a factory function after it was defined.

``` js
function Rectangle(length, breadth) {
  this.length = length;
  this.breadth = breadth;

  this.getArea = function() {
    return this.length * this.breadth;
  };
  this.
}

Rectangle.prototype.printAll = function() {
  console.log(`The length is: ${this.length}`);
  console.log(`The breadth is: ${this.breadth}`);
  console.log(`The area is: ${this.getArea()}`);
}
```

## Functinal mixins

Functional mixins are a data structure that provides a higher abstraction. They also provide true encapsulation. This is something that even classes fail to provide.

## Classes

There are two main ways of implementing classes in Javascript

### _Using a constructor function_

Note that in this context, the use of the __function__ keyword cannot be avoided, we cannot use arrow functions because the context is not passed properly with the __this__ keyword.  
Note2: Altough it looks similar, it is not the same as a factory function.

``` js
function Rectangle(length, breadth) {
  this.length = length;
  this.breadth = breadth;

  this.getArea = function() {
    return this.length * this.breadth;
  };
}

Rectangle.prototype.printAll = function() {
  console.log(`The length is: ${this.length}`);
  console.log(`The breadth is: ${this.breadth}`);
  console.log(`The area is: ${this.getArea()}`);
}

const square = new Rectangle(10, 10);
square.printAll();
```

Note that one of the methods was defined inside the definition of the function and another outside. This is just to show that this can be done.

### _Using the __class__ syntax introduced in ES6_

This is only syntactical sugar of what we did before.

Declaring the method inside the Object:

``` js
class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  getArea() {
    return this.length * this.breadth;
  };
}

Rectangle.prototype.printAll = function() {
  console.log(`The length is: ${this.length}`);
  console.log(`The breadth is: ${this.breadth}`);
  console.log(`The area is: ${this.getArea()}`);
};


const square = new Rectangle(10, 10);
square.printAll();
```

Just as before one of the methods was defined inside the definition of the function and another outside to show how this can be done.

## Inheritance in Javascript

Composition is harder with classes.  
<https://medium.com/javascript-scene/why-composition-is-harder-with-classes-c3e627dcd0aa>

The use of classes increases the complexity(wich makes the code more error prone) and rigidity(wich amplifies the probability of breaking changes through inheritance) of the code.
