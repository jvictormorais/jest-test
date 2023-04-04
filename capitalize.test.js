const caps = require("./capitalize");

test("Capitalize letters from string", () => {
  expect(caps("something")).toBe("Something");
});
