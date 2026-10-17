'use strict';
function example() {
  console.log(x); 
  var x = 10;
  console.log(x); 
}
example();

const incScalar = (n) => n + 1;

const a = 5;
const b = incScalar(a);
console.dir({ a, b });


const incReference = (num) => {
  num.n += 1;
};

const obj = { n: 5 };
incReference(obj);
console.dir(obj);

const array = [
  true, 'hello', 5, 12, -200, false, false, 'word',
 null, undefined, { a: 1 }, [1, 2], 3.14, 'Dota_2', true, 0
];


const hash1 = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
};

for (const item of array) {
  const type = typeof item;
  hash1[type] += 1;
}


console.dir(hash1);


const hash2 = {};

for (const item of array) {
  const type = typeof item;
  if (!(type in hash2)) {
    hash2[type] = 0;
  }
  hash2[type] += 1;
}


console.dir(hash2);
