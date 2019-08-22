const flying = o => {
  let isFlying = false;

  return Object.assign({}, o, {
    fly() {
      isFlying = true;
      return this;
    },
    isFlying: () => isFlying,
    land() {
      isFlying = false;
      return this;
    }
  });
};

const bird = flying({});
console.log(bird);
console.log(bird.fly());
console.log(bird.isFlying()); // false
console.log(bird.fly().isFlying()); // true
console.log(bird.isFlying()); // true
console.log(bird.land().isFlying()); // false

const quacking = quack => o =>
  Object.assign({}, o, {
    quack: () => quack
  });

const quacker = quacking('Quack!')({});
console.log(quacker.quack()); // 'Quack!'

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
// OR...
// import pipe from `lodash/fp/flow`;

const createDuck = quack =>
  pipe(
    flying,
    quacking(quack)
  )({});

const duck = createDuck('Quack!');
console.log(duck.fly().quack());

console.log(flying, quacking, bird, duck, quacker);
