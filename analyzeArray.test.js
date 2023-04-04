const analyzeArray = require("./analyzeArray");
const object = { average: 4, length: 6, max: 8, min: 1 };

test("analyze array [1,8,3,4,2,6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual(object);
});
