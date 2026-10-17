'use strict';
 
let Name = 'Zakhar';
const Year = 1995;
 
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
greet(Name);
 
const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
 
const rangeOdd = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) result.push(i);
  }
  return result;
};
 
console.log(range(15, 30));
console.log(rangeOdd(15, 30));
 
const average = (a, b) => (a + b) / 2;
const square = (x) => x * x;
const cube = (x) => x * x * x;
 
const calculate = () => {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    const avg = average(square(i), cube(i));
    console.log(`i=${i}: average(${square(i)}, ${cube(i)}) = ${avg}`);
    result.push(avg);
  }
  return result;
};
 
console.log(calculate());
 
const fn = () => {
  const constObj = { name: 'Marcus' };
  let varObj = { name: 'Marcus' };
 
  constObj.name = 'Aurelius';
  varObj.name = 'Aurelius';
  console.log(constObj, varObj);
 
  try {
    constObj = { name: 'Other' };
  } catch (e) {
    console.log('const:', e.message);
  }
 
  varObj = { name: 'Other' };
  console.log(varObj);
};
 
fn();

const createUser = (name, city) => ({ name, city });
console.log(createUser('Marcus Aurelius', 'Roma'));
const phoneBook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Julius Caesar', phone: '+380445554434' },
  { name: 'Seneca', phone: '+380445554435' },
];
 
const findPhoneByNameArray = (name) => {
  for (const record of phoneBook) {
    if (record.name === name) return record.phone;
  }
  return undefined;
};
 
console.log(findPhoneByNameArray('Julius Caesar'));
 
const phoneHash = {
  'Marcus Aurelius': '+380445554433',
  'Julius Caesar': '+380445554434',
  Seneca: '+380445554435',
};
 
const findPhoneByNameHash = (name) => phoneHash[name];
 
console.log(findPhoneByNameHash('Seneca'));
 
