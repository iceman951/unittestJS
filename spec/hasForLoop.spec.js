const Code = require("../function/code");
let code = new Code();

//test code has For loop
describe("test code has for loop statement", () => {
  it("return true when code has for loop ", () => {
    expect(
      code.hasForLoop(
        "var b, a;for (var count = 0; count < 10; count++) {b = 50000;}window.alert('abc');if (10000 > a) {window.alert('10000');}"
      )
    ).toBe(true);
  });
});

describe("test code has for loop statement", () => {
  it("return true when code has for loop ", () => {
    expect(
      code.hasForLoop(
        "var b, a;for (var count = 0; count < 10; count++) {b = 50000;}if (10000 > a) {window.alert('10000');}"
      )
    ).toBe(true);
  });
});

describe("test code has for loop statement", () => {
  it("return false when code has for loop ", () => {
    expect(
      code.hasForLoop(
        "var b, a;window.alert('abc');if (10000 > a) {window.alert('10000');}"
      )
    ).not.toBe(true);
  });
});

describe("test code has for loop statement", () => {
  it("return false when code has for loop ", () => {
    expect(code.hasForLoop("window.alert('abc');")).not.toBe(true);
  });
});