'use strict';

const difference = (array1, array2) => {
  const exclude = new Set(array2);
  return array1.filter((item) => !exclude.has(item));
};

console.log(difference([7, -2, 10, 5, 0], [0, 10]));
console.log(difference(['Paris', 'Tokyo'], ['Tokyo', 'Madrid', 'Cairo']));
