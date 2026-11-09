'use strict';

const compose = (...fns) => {
  const handlers = [];

  const f = (x) => {
    try {
      return fns.reduceRight((acc, fn) => fn(acc), x);
    } catch (e) {
      for (const handler of handlers) handler(e);
      return undefined;
    }
  };

  f.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
    return f;
  };

  return f;
};

const inc = (x) => x + 1;
const twice = (x) => x * 2;
const fail = () => {
  throw new Error('boom');
};

const ok = compose(inc, twice);
console.log(ok(5));

const broken = compose(inc, fail, twice);
broken.on('error', (e) => console.log('error:', e.message));
console.log(broken(5));
