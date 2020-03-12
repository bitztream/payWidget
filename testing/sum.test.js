const sum = require('../client/src/sum.js');


test('adds 2 to input number', () => {
  expect(sum(1)).toBe(3);
});