const add = function add(x, y) {
  return x + y;
};
const subtract = function subtract(x, y) {
  return x - y;
};
const divide = function divide(x, y) {
  return x / y;
};
const multiply = function multiply(x, y) {
  return x * y;
};

const calculator = {
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
};

module.exports = calculator;
