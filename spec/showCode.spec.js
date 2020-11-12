const Code = require("../function/code");
let code = new Code();

describe("test showCode method", () => {
  it("return code when call method", () => {
    let expected = "var a, b; a = 2; b = 5; a + b;";
    expect(code.showCode("var a, b; a = 2; b = 5; a + b;")).toBe(expected);
  });
});

describe("test showCode method", () => {
  it("return code when call method", () => {
    let expected = "var b;b = 0;while (b == 10) {b = b + 5;}";
    expect(code.showCode("var b;b = 0;while (b == 10) {b = b + 5;}")).toBe(
      expected
    );
  });
});

describe("test showCode method", () => {
  it("return code when call method", () => {
    let expected = "window.alert(Math.sqrt(81));";
    expect(code.showCode("window.alert(Math.sqrt(81));")).toBe(expected);
  });
});

describe("test showCode method", () => {
  it("return code when call method", () => {
    let expected = "var b;for (var count = 0; count < 10; count++) {b = 3;}";
    expect(
      code.showCode("var b;for (var count = 0; count < 10; count++) {b = 3;}")
    ).toBe(expected);
  });
});
