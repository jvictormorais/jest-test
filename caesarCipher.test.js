const caesarCipher = require("./caesarCipher");

test("test z to a, shift 1", () => {
  expect(caesarCipher("zyxwvutsrqponmlkjihgfedcba", 1)).toBe(
    "azyxwvutsrqponmlkjihgfedcb"
  );
});
test("hello my name is jose, shift 13", () => {
  expect(caesarCipher("hello my name is jose!", 13)).toBe(
    "uryyb zl anzr vf wbfr!"
  );
});
test("test z to a, shift 1", () => {
  expect(caesarCipher("zyxwvutsrqponmlkjihgfedcba", 1)).toBe(
    "azyxwvutsrqponmlkjihgfedcb"
  );
});
