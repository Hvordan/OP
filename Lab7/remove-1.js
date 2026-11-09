'use strict';


const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};

const nums = [1, 2, 3, 4, 5, 6, 7];
removeElement(nums, 5);
console.log(nums);

const cities = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(cities, 'Lima');
removeElement(cities, 'Berlin');
console.log(cities);
