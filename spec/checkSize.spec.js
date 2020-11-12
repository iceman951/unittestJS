const Code = require("../function/code");
let code = new Code();

//test big code string [100,101)
describe("test check >100 string code lenght", () => {
  it("return Big code when code string > 100 ", () => {
    expect(
      code.checkSize(
        "var b, a;for (var count = 0; count < 10; count++) {b = 50000;}window.alert('abc');if (10000 > a) {window.alert('10000');}"
      )
    ).toBe("Big code");
  });
});

describe("test check >100 string code lenght", () => {
  it("return Big code when code string > 100 ", () => {
    expect(
      code.checkSize(
        "var a, b;for (var count = 0; count < 10; count++) {b = 50000;}window.alert('abc');if (10000 > a) {window.alert('10000');}; window.alert('99999');"
      )
    ).toBe("Big code");
  });
});

//test normal code string [1,100]
describe("test check [1,100] string code lenght", () => {
  it("return Normal code when code string < 100 and >0 ", () => {
    expect(
      code.checkSize(
        "var b, a;window.alert('abc');if (10000 > a) {window.alert('10000');}"
      )
    ).toBe("Normal code");
  });
});

//test null code lenght
describe("test check nothing code lenght", () => {
  it("return it's not code when code string <= 0 ", () => {
    expect(code.checkSize("")).toBe("it's not code");
  });
});
