'use strict';

const array = () => {
  const data = [];
  const get = (index) => data[index];
  return Object.assign(get, {
    push(value) {
      data[data.length] = value;
    },
    pop() {
      const last = data[data.length - 1];
      if (data.length > 0) data.length--;
      return last;
    },
  });
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());
