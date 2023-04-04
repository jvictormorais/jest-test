const calculator = require("./calculator");

test("calculator add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("calculator subtract", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});
test("calculator divide", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});
test("calculator multiply", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
