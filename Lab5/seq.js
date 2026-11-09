'use strict';

const seq = (f) => (arg) =>
  typeof arg === 'function'
    ? seq((x) => f(arg(x)))
    : f(arg);

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(
  seq(x => x + 1)
     (x => x * 2)
     (x => x / 3)
     (x => x - 4)(7)
);
