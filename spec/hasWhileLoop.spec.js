const Code = require("../function/code");
let code = new Code();

//test code has While loop
describe("test code has while loop statement", () => {
  it("return true when code has while loop ", () => {
    expect(
      code.hasWhileLoop(
        "var b, a;for (var count = 0; count < 10; count++) {b = 50000;}if (10000 > a) {window.alert('10000');while (true) {window.alert('1111');}}"
      )
    ).toBe(true);
  });
});

describe("test code has while loop statement", () => {
  it("return true when code has while loop ", () => {
    expect(
      code.hasWhileLoop(
        "for (var count = 0; count < 10; count++) {b = 50000;}while (true) {window.alert('10000');}"
      )
    ).toBe(true);
  });
});

describe("test code has while loop statement", () => {
  it("return false when code has while loop ", () => {
    expect(
      code.hasWhileLoop(
        "var b, a; window.alert('abc');if (10000 > a) {window.alert('10000');}"
      )
    ).not.toBe(true);
  });
});

describe("test code has while loop statement", () => {
  it("return false when code has while loop ", () => {
    expect(code.hasWhileLoop("window.alert('abc');")).not.toBe(true);
  });
});