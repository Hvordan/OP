
'use strict';

// 1. Цикл for
const sumFor = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

// 2. Цикл for..of
const sumForOf = (...args) => {
  let total = 0;
  for (const value of args) {
    total += value;
  }
  return total;
};

// 3. Цикл while
const sumWhile = (...args) => {
  let total = 0;
  let i = 0;
  while (i < args.length) {
    total += args[i];
    i++;
  }
  return total;
};

// 4. Цикл do..while
const sumDoWhile = (...args) => {
  let total = 0;
  let i = 0;
  if (args.length === 0) return total;
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  return total;
};

// 5. Array.prototype.reduce()
const sumReduce = (...args) => args.reduce((acc, value) => acc + value, 0);

//6. Найти максимальный элемент в двумерном массиве

const max = (matrix) => {
  let result = -Infinity;
  for (const row of matrix) {
    for (const value of row) {
      if (value > result) result = value;
    }
  }
  return result;
};

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); 

//7. Ages
const ages = (persons) => {
  const result = {};
  for (const name in persons) {
    const { born, died } = persons[name];
    result[name] = died - born;
  }
  return result;
};

const persons = {
  einstein: { born: 1879, died: 1955 },
  curie: { born: 1867, died: 1934 },
  newton: { born: 1643, died: 1727 },
  tesla: { born: 1856, died: 1943 },
};

console.log(ages(persons));
// { einstein: 76, curie: 67, newton: 84, tesla: 87 }
