var MyCode = require("../function/code");
var sinon = require("sinon");
var myObj = new MyCode();

//spy callCodeConcatenate
describe("test double", () => {
  it("spy Concatenate method ", () => {
    var spy = sinon.spy(myObj, "codeConcatenate");
    var code1 = "var a;",
      code2 = "var b;";
    myObj.callCodeConcatenate(code1, code2);
    expect(spy.calledOnce).toBe(true);
  });
});

//spy callHasForLoop
describe("test double", () => {
  it("spy HasForLoop method", () => {
    var spy = sinon.spy(myObj, "hasForLoop");
    var code = "var a; for";
    myObj.callHasForLoop(code);
    expect(spy.calledOnce).toBe(true);
  });
});

//spy callHasWhileLoop
describe("test double", () => {
  it("spy HasWhileLoop method", () => {
    var spy = sinon.spy(myObj, "hasWhileLoop");
    var code = "var a; while";
    myObj.callHasWhileLoop(code);
    expect(spy.calledOnce).toBe(true);
  });
});

//stub in callRunCode
describe("Test stub", function () {
  it("Stub the runCode method", function () {
    var stub = sinon.stub(myObj, "runCode");
    stub
      .withArgs("var a; a=6; a;")
      .onFirstCall()
      .returns(6)
      .onSecondCall()
      .returns(6);
    expect(myObj.callRunCode("var a; a=6; a;")).toBe(6);
    expect(myObj.callRunCode("var a; a=6; a;")).toBe(6);
  });
});

//stub in callCheckSize
describe("Test stub", function () {
    it("Stub the CheckSize method", function () {
      var stub = sinon.stub(myObj, "checkSize");
      stub
        .withArgs("var a; a=6; a; while(true);")
        .onFirstCall()
        .returns("Normal code")
        .onSecondCall()
        .returns("Normal code");
      expect(myObj.callCheckSize("var a; a=6; a; while(true);")).toBe("Normal code");
      expect(myObj.callCheckSize("var a; a=6; a; while(true);")).toBe("Normal code");
    });
  });