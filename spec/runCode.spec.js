const Code = require("../function/code");
let code = new Code();

//test var declaration and operation
describe("test runCode method", () => {
  it("return 7 when a=2, b=5 , a+b", () => {
    expect(code.runCode("var a, b; a = 2; b = 5; a + b;")).toBe(7);
  });
});

describe("test runCode method", () => {
  it("return -3 when a=2, b=5 , a-b", () => {
    expect(code.runCode("var a, b; a = 2; b = 5; a - b;")).toBe(-3);
  });
});

describe("test runCode method", () => {
  it("return 10 when a=2, b=5 , c=0, a*b+c", () => {
    expect(code.runCode("var a, b, c; a = 2; b = 5; c = 0; a * b + c;")).toBe(
      10
    );
  });
});

describe("test runCode method", () => {
  it("return 0 when a=10, b=5 , a+b", () => {
    expect(code.runCode("var a, b; a = 10; b = 5; a / b;")).toBe(2);
  });
});

// test runcode if statement
describe("test runCode method", () => {
  it("return true when if(1>0)", () => {
    expect(code.runCode("if(1>0) true")).toBe(true);
  });
});

describe("test runCode method", () => {
  it("return true when if(5==5)", () => {
    expect(code.runCode("if(5==5) true")).toBe(true);
  });
});

describe("test runCode method", () => {
  it("return true when a=10, b=5 if(b<a)", () => {
    expect(code.runCode("var a, b; a=10; b=5; if(b<a) true")).toBe(true);
  });
});

// test runcode for loop statement
describe("test runCode method", () => {
  it("return 15 when b=5 repeat b+1 10 times", () => {
    expect(
      code.runCode(
        "var b;b = 5; for (var count = 0; count < 10; count++) { b = b + 1;}; b;"
      )
    ).toBe(15);
  });
});

describe("test runCode method", () => {
  it("return 16 when b=5 repeat b*2 3 times", () => {
    expect(
      code.runCode(
        "var b;b = 2; for (var count = 0; count < 3; count++) { b = b * 2;}; b;"
      )
    ).toBe(16);
  });
});

// test runcode while loop statement

describe("test runCode method", () => {
  it("return 10 when b=0 repeat b+1 until b=10", () => {
    expect(code.runCode("var b;b = 0;while (b < 10) {b = b + 1;} b;")).toBe(10);
  });
});
